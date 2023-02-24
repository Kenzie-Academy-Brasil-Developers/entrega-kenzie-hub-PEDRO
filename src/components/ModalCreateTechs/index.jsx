import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../providers/TechsContext";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { ModalCreateSchema } from "./ModalCreateSchema";
import { StyledDashboardDiv, StyledModalCreateForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";

export const ModalCreateTechs = () => {
  const { techsCreate, setCreateModal } = useContext(TechsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(ModalCreateSchema),
  });

  const submit = (formData) => {
    techsCreate(formData);
    setCreateModal(false);
    reset();
  };

  return (
    <StyledDashboardDiv>
      <StyledModalCreateForm onSubmit={handleSubmit(submit)}>
        <div>
          <h2>Cadastrar Tecnologia</h2>
          <Button action={() => setCreateModal(false)}>X</Button>
        </div>
        <Input
          label={"Nome"}
          type={"text"}
          placeholder={"Digite aqui o nome da tecnologia"}
          register={register("title")}
          error={errors.title}
        />
        <Select
          label={"Selecionar módulo"}
          register={register("status")}
          error={errors.status}
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </Select>
        <Button>Cadastrar Tecnologia</Button>
      </StyledModalCreateForm>
    </StyledDashboardDiv>
  );
};
