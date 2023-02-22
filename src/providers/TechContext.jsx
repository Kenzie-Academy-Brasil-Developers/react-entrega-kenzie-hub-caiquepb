import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);
  const [modalAdd, setModalAdd] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)

  const techCreate = async (formData) => {
    const token = localStorage.getItem("@TOKEN");
    
    try {
      const response = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia criada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Tecnologia não foi criada!");
    }
  };

  const techDelete = async (techId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia deletada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Tecnologia não foi deletada!");
    }
  };

  const techEdit = async (techId, formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.put(`/users/techs/${techId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia editada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Tecnologia não foi editada!");
    }
  };

  useEffect(() => {
    const checkTechList = async () => {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setTechList(response.data.techs);
        } catch (error) {
          // console.log(error);
        }
      }
    };
    checkTechList();
  }, [techList]);

  useEffect(() => {
    const checkTechList = async () => {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setTechList(response.data.techs);
        } catch (error) {
          // console.log(error);
        }
      }
    };
    checkTechList();
  }, [techList]);

  return (
    <TechContext.Provider
      value={{ techList, setTechList, modalAdd, setModalAdd, modalEdit, setModalEdit, techCreate, techDelete, techEdit }}
    >
      {children}
    </TechContext.Provider>
  );
};
