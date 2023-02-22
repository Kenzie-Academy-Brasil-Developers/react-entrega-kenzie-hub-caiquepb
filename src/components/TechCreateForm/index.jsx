import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { FormModal } from "./style";

export const TechCreateForm = () => {
  const { techCreate, setModalAdd } = useContext(TechContext);
  const { register, handleSubmit } = useForm();

  const submit = (formData) => {
    techCreate(formData);
    setModalAdd(false)
  };

  return (
    <FormModal>
      <div className="form__container">
        <div className="form__header">
          <h1>Cadastrar tecnologia</h1>
          <p onClick={() => setModalAdd(false)}>X</p>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <fieldset>
            <label htmlFor="title">Nome</label>
            <input id="title" type="text" {...register("title")} />
          </fieldset>
          <fieldset>
            <label htmlFor="status">Selecionar status</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </fieldset>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </FormModal>
  );
};
