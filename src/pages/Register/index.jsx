import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { Button } from "../../components/Button";
import { StyledMain } from "../login/style";
import { StyledDivTitle, StyledFormRegister } from "./style";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./registerSchema";

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
        <Button>
          <Link to="/">Voltar</Link>
        </Button>
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
          error={errors.password}
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
        <Input
          label={"Selecionar módulo"}
          type={"text"}
          placeholder={"Primeiro Módulo"}
          register={register("course_module")}
          error={errors.course_module}
        />
        <Button>Cadastrar</Button>
      </StyledFormRegister>
    </StyledMain>
  );
};
