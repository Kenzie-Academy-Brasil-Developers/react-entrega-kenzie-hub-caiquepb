import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import KenzieHubLogo from "../../assets/LogoKenzieHub.svg";
import { RegisterForm } from "../../components/RegisterForm";
import { StyledRegisterMain } from "./style";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const registerUser = async (data) => {
    try {
      await api.post("/users", data);
      navigate("/home");
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <StyledRegisterMain>
      <div className="main__container">
        <div className="nav__container">
          <img src={KenzieHubLogo} alt="KenzieHub Logo" />
          <Link to="/">Voltar</Link>
        </div>
        <RegisterForm registerUser={registerUser} />
      </div>
    </StyledRegisterMain>
  );
};
