import * as yup from "yup";

export const ModalCreateSchema = yup.object().shape({
  title: yup.string().required("O nome da tecnologia é o obrigatório"),
});
