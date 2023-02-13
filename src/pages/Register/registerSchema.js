import * as yup from "yup";

const phoneNumber = /[1-9]{2} 9[1-9]\d{3}\d{4}/;
const validPassWord = /[a-z][0-9][A-z]/;

export const RegisterSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("O email digitado é inválido"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "A senha precisa ter pelo menos 8 caracteres")
    // .matches(
    //   validPassWord,
    //   "A senha precisa conter caracteres especiais e letras maiúsculas"
    // )
    .max(15, "A senha não pode ter mais de 15 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirmar senha é obrigatório")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
  bio: yup.string().required("A bio é obrigatória"),
  contact: yup
    .string()
    .required("O contato é obrigatório")
    .matches(
      phoneNumber,
      "Insira o formato de telefone correto (com ddd incluso)"
    ),
  course_module: yup.string().required("O módulo do curso é obrigatório"),
});
