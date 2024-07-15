import { axios } from "../../services/axios";
import { FetchFilmsListData, FetchFilmsParams } from "./types";

export const fetchFilms = ({ title }: FetchFilmsParams) =>
  axios
    .get<FetchFilmsListData>(
      `http://www.omdbapi.com/?t=${title}&apikey=240ad84c`
    )
    .then(({ data }) => {
      console.log(data);
    });

export const CheckFilm = (title: string) => {
  axios.get<any>(`http://localhost:1234/movie/${title}`).then(({ data }) => {
    console.log(data);
  });
};
