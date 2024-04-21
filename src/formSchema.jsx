import * as yup from "yup";

export const formSchema = yup.object({
  id: yup.string().required("Id obrigatório"),
  title: yup.string().required("Título obrigatório"),
  pageNumbers: yup.string().required("Número de páginas: obrigatório"),
  isbn: yup.string().required("ISBN obrigatório"),
  publishCompany: yup.string().required("Editora obrigatória"),
});
