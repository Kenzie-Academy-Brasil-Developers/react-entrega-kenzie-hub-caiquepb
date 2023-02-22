import { Link } from "react-router-dom";
import KenzieHubLogo from "../../assets/LogoKenzieHub.svg";
import { RegisterForm } from "../../components/RegisterForm";
import { StyledRegisterMain } from "./style";

export const RegisterPage = () => {
  return (
    <StyledRegisterMain>
      <div className="main__container">
        <div className="nav__container">
          <img src={KenzieHubLogo} alt="KenzieHub Logo" />
          <Link to="/">Voltar</Link>
        </div>
        <RegisterForm />
      </div>
    </StyledRegisterMain>
  );
};
