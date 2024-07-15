import { useQuery } from "@tanstack/react-query";
import { FetchFilmsParams } from "./types";
import { queryKeys } from "./queryKeys";
import { fetchFilms } from "./api";

export const userFilms = ({ title }: FetchFilmsParams) =>
  useQuery({
    queryKey: [queryKeys.films],
    queryFn: () => fetchFilms({ title }),
  });
