import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const AppRoutes = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loginUser = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      const checkLogin = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/home");
          // console.log(response.data);
        } catch (error) {
          console.log(error);
          navigate("/");
        }
      };
      checkLogin();
    }
  }, []);

  const logoutUser = async () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/login");
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage loginUser={loginUser} />} />
      <Route
        path="/home"
        element={<HomePage user={user} logoutUser={logoutUser} />}
      />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
