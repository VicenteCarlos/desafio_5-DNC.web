// import {useEffect , useState} from 'react'
import Header from "../../components/Header/Header";
import "./index.scss";
// import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros'
import { useParams } from "react-router-dom";
// import { LivrosService } from '../../api/LivrosService'
import { useForm } from "react-hook-form";
import { yupResolver} from "@hookform/resolvers/yup";
import { formSchema } from "../../formSchema";
import { useBook } from "../../hooks/useBook";

const LivrosEdicao = () => {
  const { id } = useParams();

  const { useUpdateBook } = useBook();
  const updateBook = useUpdateBook();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const sendData = async (formData) => {
    try {
      await updateBook.mutateAsync({ id, formData });
      alert("Livro atualizado!");
    } catch (error) {
      console.log(`Error:\n${error}`);
      alert("Ocorreu um erro, verifique no console");
    }
  };

  return (
    <>
      <Header />
      <div className="livrosCadastro">
        <h1>Edição de Livros</h1>
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
              <button
                type="submit"
              >
                Atualizar Livro
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LivrosEdicao;
