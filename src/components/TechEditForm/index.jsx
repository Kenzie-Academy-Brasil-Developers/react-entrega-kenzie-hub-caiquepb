import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { FormModalEdit } from "./style";

export const TechEditForm = ({ tech }) => {
  const { techEdit, setModalEdit } = useContext(TechContext);
  const { register, handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const submit = (formData) => {
    techEdit(tech.id, formData);
    setModalEdit(false);
  };

  return (
    <FormModalEdit>
      <div className="form__container">
        <div className="form__header">
          <h1>Tecnologia Detalhes</h1>
          <p onClick={() => setModalEdit(false)}>X</p>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <fieldset>
            <label htmlFor="title">Nome</label>
            <input
              value={tech.title}
              id="title"
              type="text"
              // {...register("title")}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="status">Selecionar status</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </fieldset>
          <div className="buttons__container">
            <button className="editButton" type="submit">
              Salvar alterações
            </button>
            {/* <button className="deleteButton">Excluir</button> */}
          </div>
        </form>
      </div>
    </FormModalEdit>
  );
};
