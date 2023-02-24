import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const { techs, setTechs } = useContext(UserContext);

  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(null);

  const techsCreate = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await Api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechs([...techs, response.data]);
      toast.success("Tecnologia criada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const techsRemove = async (techId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await Api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechs = techs.filter((tech) => tech.id !== techId);
      setTechs(newTechs);
      toast.success("Tecnologia deletada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const techsUpdate = async (formData, techId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await Api.put(`/users/techs/${techId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechs = techs.map((tech) => {
        if (techId === tech.id) {
          return { ...tech, ...formData };
        } else {
          return tech;
        }
      });
      setTechs(newTechs);
      toast.success("Tecnologia atualizada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechsContext.Provider
      value={{
        techs,
        techsCreate,
        techsRemove,
        createModal,
        setCreateModal,
        updateModal,
        setUpdateModal,
        techsUpdate,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};
