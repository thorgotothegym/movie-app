export type CreateUserParams = {
  username: string;
  password: string;
};

export type CreateUserResponse = {
  id: string;
  username: string;
};

export type LoginArguments = {
  username: string;
  email: string;
};

export type LoginResponse = {
  uuid: string;
  username: string;
};

export type Login = ({
  username,
  email,
}: LoginArguments) => LoginResponse;
