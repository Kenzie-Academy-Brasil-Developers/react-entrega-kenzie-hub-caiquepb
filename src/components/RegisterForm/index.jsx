import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "../../pages/Register/registerFormSchema";
import { Input } from "./InputRegisterForm";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";

export const RegisterForm = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
    mode: "onSubmit",
  });

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <h1>Crie sua conta</h1>
      <p>Rapido e grátis, vamos nessa</p>
      <Input
        id="name"
        label="Nome: "
        type="text"
        placeholder="Digite aqui seu nome"
        register={register}
        error={errors.name?.message}
      />
      <Input
        id="email"
        label="Email: "
        type="email"
        placeholder="Digite aqui seu email"
        register={register}
        error={errors.email?.message}
      />
      <Input
        id="password"
        label="Senha: "
        type="password"
        placeholder="Digite aqui sua senha"
        register={register}
        error={errors.password?.message}
      />
      <Input
        id="passwordConfirmation"
        label="Confirmar Senha: "
        type="password"
        placeholder="Digite novamente sua senha"
        register={register}
        error={errors.passwordConfirmation?.message}
      />
      <Input
        id="bio"
        label="Bio: "
        type="text"
        placeholder="Fale sobre você"
        register={register}
        error={errors.bio?.message}
      />
      <Input
        id="contact"
        label="Contato: "
        type="tel"
        placeholder="Opção de contato"
        register={register}
        error={errors.contact?.message}
      />
      <fieldset>
        <label htmlFor="select">Selecionar módulo: </label>
        <select id="select" {...register("course_module")}>
          <option value="Módulo 1">Módulo 1</option>
          <option value="Módulo 2">Módulo 2</option>s
          <option value="Módulo 3">Módulo 3</option>
          <option value="Módulo 4">Módulo 4 </option>
          <option value="Módulo 5">Módulo 5</option>
          <option value="Módulo 6">Módulo 6</option>
        </select>
      </fieldset>
      <button type="submit">Cadastrar</button>
    </form>
  );
};
