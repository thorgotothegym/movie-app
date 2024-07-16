import { axios } from "../../services/axios";
import {
  CreateUserParams,
  CreateUserResponse,
  LoginArguments,
  LoginResponse,
} from "./types";

export const createUser = ({ username, password }: CreateUserParams) =>
  axios
    .post<CreateUserResponse>(`http://localhost:1234/user`, {
      username,
      password,
    })
    .then(({ data }) => {
      console.log(data);
    });

export const login = ({ email, username }: LoginArguments) => {
  axios
    .post<LoginResponse>(`http://localhost:1234/user`, { email, username })
    .then(({ data }) => {
      data;
    });
};
