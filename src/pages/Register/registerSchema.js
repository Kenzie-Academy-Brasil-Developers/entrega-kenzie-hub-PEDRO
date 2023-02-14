import * as yup from "yup";

const phoneNumber = /[1-9]{2} 9[1-9]\d{3}\d{4}/;
const validPassWord =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/;

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
    .max(15, "A senha não pode ter mais de 15 caracteres")
    .matches(
      validPassWord,
      "Sua senha precisa possuir: pelo menos 1 número; Apresentar pelo menos 1 caractere especial; ($,#,@,!,etc); Ter ao menos 1 letra minúscula;  Ter ao menos 1 letra maiúscula."
    ),
  confirmPassword: yup
    .string()
    .required("Confirmar a senha é obrigatório")
    .oneOf([yup.ref("password"), null], "As senhas não correspondem"),
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
