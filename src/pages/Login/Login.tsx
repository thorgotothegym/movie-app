import { FC } from "react";
import { Input } from "../../components/ui/input";

export const Login: FC = () => {
  return (
    <>
      <Input name="user" id="user" type="text" placeholder="Username" />
      <Input
        name="password"
        id="password"
        type="password"
        placeholder="Email"
      />
    </>
  );
};
