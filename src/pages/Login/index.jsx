import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "../../pages/Login/loginFormSchema";
import KenzieHubLogo from "../../assets/LogoKenzieHub.svg";
import { StyledLoginMain } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const LoginPage = () => {
  const { loginUser } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    mode: "onSubmit",
  });

  return (
    <StyledLoginMain>
      <div className="div__container">
        <img src={KenzieHubLogo} alt="KenzieHub Logo" />
        <form onSubmit={handleSubmit(loginUser)}>
          <h1>Login</h1>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
            {errors ? <p>{errors.email?.message}</p> : null}
          </fieldset>
          <fieldset>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors ? <p>{errors.password?.message}</p> : null}
          </fieldset>
          <button type="submit">Entrar</button>
          <p>Ainda não possui uma conta ?</p>
          <Link to="/register">Register</Link>
        </form>
      </div>
    </StyledLoginMain>
  );
};
