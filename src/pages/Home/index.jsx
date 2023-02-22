import { Link } from "react-router-dom";
import { StyledHomeMain } from "./style";
import KenzieHubLogo from "../../assets/LogoKenzieHub.svg";
import PlusButton from "../../assets/PlusButton.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechsList } from "../../components/TechsList";
import { TechCreateForm } from "../../components/TechCreateForm";
import { TechContext } from "../../providers/TechContext";

export const HomePage = () => {
  const { user, logoutUser } = useContext(UserContext);
  const { modalAdd, setModalAdd } = useContext(TechContext);
  

  return (
    <StyledHomeMain>
      <div className="main__container">
        <section className="header__container">
          <img onClick={logoutUser} src={KenzieHubLogo} alt="KenzieHub Logo" />
          <Link onClick={logoutUser} to="/">
            Sair
          </Link>
        </section>
        <section className="user__container">
          <h1>{user.name}</h1>
          <h3>{user.course_module}</h3>
        </section>
        <section className="techs__container">
          <div className="title__container">
            <h1>Tecnologias</h1>
            <img
              onClick={() => setModalAdd(true)}
              src={PlusButton}
              alt="Plus Button"
            />
          </div>
          <TechsList />
        </section>
          {modalAdd && <TechCreateForm />}
      </div>
    </StyledHomeMain>
  );
};
