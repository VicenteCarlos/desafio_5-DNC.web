import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Home from "./views/Home/Home";
import Livros from "./views/Livros/Livros";
import LivrosCadastro from "./views/LivrosCadastro/LivrosCadastro";
import LivrosEdicao from "./views/LivrosEdicao/LivrosEdicao";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/livros",
    element: <Livros />,
  },
  {
    path: "/livros/cadastro",
    element: <LivrosCadastro />,
  },
  {
    path: "/books/:id",
    element: <LivrosEdicao />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
