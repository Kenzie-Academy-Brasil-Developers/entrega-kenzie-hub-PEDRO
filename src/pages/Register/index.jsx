import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { Button } from "../../components/Button";
import { StyledDivTitle, StyledFormRegister } from "./style";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./registerSchema";
import { Select } from "../../components/Select";
import { StyledMain } from "../Login/style";

export const Register = ({ registerUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const submit = (formData) => {
    console.log(formData);
    registerUser(formData);
    reset();
  };

  return (
    <StyledMain>
      <StyledDivTitle>
        <img src={logo} alt="Kenzie Hub" />
        <div className="backToLogin">
          <Link to="/">Voltar</Link>
        </div>
      </StyledDivTitle>
      <StyledFormRegister onSubmit={handleSubmit(submit)} noValidate>
        <div className="divInfo">
          <h3>Crie sua conta</h3>
          <p>Rapido e grátis, vamos nessa</p>
        </div>
        <Input
          label={"Name"}
          type={"text"}
          placeholder={"Digite aqui seu nome"}
          register={register("name")}
          error={errors.name}
        />
        <Input
          label={"Email"}
          type={"email"}
          placeholder={"Digite aqui seu email"}
          register={register("email")}
          error={errors.email}
        />
        <Input
          label={"Senha"}
          type={"password"}
          placeholder={"Digite aqui sua senha"}
          register={register("password")}
          error={errors.password}
        />
        <Input
          label={"Confirmar Senha"}
          type={"password"}
          placeholder={"Digite novamente sua senha"}
          register={register("confirmPassword")}
          error={errors.confirmPassword}
        />
        <Input
          label={"Bio"}
          type={"text"}
          placeholder={"Fale sobre você"}
          register={register("bio")}
          error={errors.bio}
        />
        <Input
          label={"Contato"}
          type={"text"}
          placeholder={"Fale sobre você"}
          register={register("contact")}
          error={errors.contact}
        />
        <Select
          label={"Selecionar módulo"}
          register={register("course_module")}
          error={errors.course_module}
        >
          <option value="Primeiro Módulo">Primeiro Módulo</option>
          <option value="Segundo Módulo">Segundo Módulo</option>
          <option value="Terceiro Módulo">Terceiro Módulo</option>
          <option value="Quarto Módulo">Quarto Módulo</option>
          <option value="Quinto Módulo">Quinto Módulo</option>
          <option value="Sexto Módulo">Sexto Módulo</option>
        </Select>
        <Button>Cadastrar</Button>
      </StyledFormRegister>
    </StyledMain>
  );
};
