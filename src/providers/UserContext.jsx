import { useEffect, useState } from "react";
import { createContext } from "react";
import { Api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await Api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      };
      userAutoLogin();
    }
  }, []);

  const userRegister = async (formData) => {
    try {
      const response = await Api.post("/users", formData);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const userLogin = async (formData) => {
    try {
      const response = await Api.post("/sessions", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      toast.success("Login feito com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Email ou senha inválidos");
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
