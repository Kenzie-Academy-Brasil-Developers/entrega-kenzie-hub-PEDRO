import * as yup from "yup";

export const ModalUpdateSchema = yup.object().shape({
  title: yup.string().required("O nome da tecnologia é o obrigatório"),
  status: yup.string().required("A senha é obrigatória"),
});
