import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { bookAPI } from "../../services";

const useGetAllBooks = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getAllBooks"],
    queryFn: async () => {
      const { data, status } = await bookAPI.get("/books");
      return { data, status };
    },
  });

  return { data, isLoading };
};

const useGetBook = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: ["getBook"],
    queryFn: async () => {
      const { data, status } = await bookAPI.get(`/books/${id}`);
      return { data, status };
    },
  });

  return { data, isLoading };
};

const useUpdateBook = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async ({ dataForm, id }) => {
      const { data, status } = await bookAPI.put(`/book/${id}`, dataForm);
      return { data, status };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllBooks"] });
      queryClient.invalidateQueries({ queryKey: ["getBook"] });
    },
  });

  return { mutateAsync };
};

export const useBook = () => ({ useGetAllBooks, useGetBook, useUpdateBook });
