import { useForm } from "react-hook-form";
import Header from "../../components/Header/Header";
import "./index.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../formSchema";
import { useBook } from "../../hooks/useBook";

const LivrosCadastro = () => {
  const { useCreateBook } = useBook();
  const createBook = useCreateBook()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const sendData = async (data) => {
    try {
      await createBook.mutateAsync(data);
      alert("Livro criado!")
    } catch (error) {
      console.log(error)
      alert("Ocorreu um erro, verifique no console");
    }
  }

  return (
    <>
      <Header />
      <div className="livrosCadastro">
        <h1>Cadastro de Livros</h1>
        <div>
          <form id="formulario" onSubmit={handleSubmit(sendData)}>
            <div className="form-group">
              <label>{errors.id ? errors.id.message : "Id"}</label>
              <input {...register("id")} />
            </div>
            <div className="form-group">
              <label>{errors.title ? errors.title.message : "Título"}</label>
              <input {...register("title")} />
            </div>
            <div className="form-group">
              <label>
                {errors.pageNumbers
                  ? errors.pageNumbers.message
                  : "Número de páginas"}
              </label>
              <input {...register("pageNumbers")} />
            </div>
            <div className="form-group">
              <label>{errors.isbn ? errors.isbn.message : "ISBN"}</label>
              <input {...register("isbn")} />{" "}
            </div>
            <div className="form-group">
              <label>
                {errors.publishCompany
                  ? errors.publishCompany.message
                  : "Editora"}
              </label>
              <input {...register("publishCompany")} />{" "}
            </div>
            <div className="form-group">
              <button type="submit">Cadastrar Livro</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LivrosCadastro;
