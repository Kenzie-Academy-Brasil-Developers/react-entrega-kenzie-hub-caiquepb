import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import TrashButton from "../../assets/TrashButton.svg"

export const TechsList = () => {
  const { techList, techDelete, setModalEdit } = useContext(TechContext);
  return (
    <>
      {techList.length > 0 ? (
        <ul>
          {techList.map((tech) => (
            <li key={tech.id} onClick={() => setModalEdit(true)}>
              <h3 className="tech__title">{tech.title}</h3>
              <div className="tech__container">
                <h3 className="tech__status">{tech.status}</h3>
                <img className="tech__img" src={TrashButton} onClick={() => techDelete(tech.id)} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="techNone__container">
          <h1 className="techNone__title">
            O usuário não possui nenhuma tecnologia ainda
          </h1>
        </div>
      )}
    </>
  );
};
