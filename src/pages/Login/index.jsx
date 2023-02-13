import { Button } from "../../components/Button";
import logo from "../../assets/Logo.svg";
import { StyledFormLogin, StyledMain } from "./style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <StyledMain>
      <div className="imgLogo">
        <img src={logo} alt="Kenzie Hub" />
      </div>
      <StyledFormLogin>
        <h3>Login</h3>
        <div className="divEmail">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Digite aqui seu email" />
        </div>
        <div className="divPassword">
          <label htmlFor="password">Senha</label>
          <input type="password" placeholder="Digite aqui sua senha" />
        </div>
        <Button>Entrar</Button>
        <div className="divRegister">
          <p>Ainda não possui uma conta?</p>
          <Button>
            <Link to="/register">Cadastre-se</Link>
          </Button>
        </div>
      </StyledFormLogin>
    </StyledMain>
  );
};
