import { Link } from "react-router-dom";
import { StyledHomeMain } from "./style";
import KenzieHubLogo from "../../assets/LogoKenzieHub.svg";
import PlusButton from "../../assets/PlusButton.svg";

export const HomePage = ({ user, logoutUser}) => {
  return (
    <StyledHomeMain>
      <div className="main__container">
        <section className="header__container">
          <img onClick={(logoutUser)} src={KenzieHubLogo} alt="KenzieHub Logo" />
          <Link onClick={(logoutUser)} to="/">Sair</Link>
        </section>
        <section className="user__container">
          <h1>{user.name}</h1>
          <h3>{user.course_module}</h3>
        </section>
        <section className="techs__container">
          <div className="title__container">
            <h1>Tecnologias</h1>
            <img src={PlusButton} alt="Plus Button" />
          </div>
          <ul>
            {user.techs.map((tech) => (
              <li key={tech.id}>
                <h3 className="tech__title">{tech.title}</h3>
                <h3 className="tech__status">{tech.status}</h3>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </StyledHomeMain>
  );
};
