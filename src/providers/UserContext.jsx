import { useEffect, useState } from "react";
import { createContext } from "react";
import { Api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await Api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          setTechs(response.data.techs);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      userAutoLogin();
    }
  }, []);

  const userRegister = async (formData) => {
    try {
      const response = await Api.post("/users", formData);
      navigate("/");
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const userLogin = async (formData) => {
    try {
      const response = await Api.post("/sessions", formData);
      setUser(response.data.user);
      setTechs(response.data.user.techs);
      localStorage.setItem("@TOKEN", response.data.token);
      navigate("/dashboard");
      toast.success("Login feito com sucesso!");
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
    <UserContext.Provider
      value={{
        user,
        userRegister,
        userLogin,
        userLogout,
        loading,
        techs,
        setTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
