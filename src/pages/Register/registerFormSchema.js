import * as yup from "yup";

export const registerFormSchema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("O email digitado é inválido"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .matches(/[a-zA-Z]/, "Deve conter ao menos uma letra")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W|_)/, "Deve conter no mínimo um caracter especial")
    .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
  passwordConfirmation: yup
    .string()
    .required("A senha é obrigatória")
    .oneOf([yup.ref("password")], "As senhas não estão iguais"),
  bio: yup.string().required("A bio é obrigatória"),
  contact: yup.string().required("O telefone é obrigatório"),
  // course_module: yup.required("O módulo é obrigatório"),
});
