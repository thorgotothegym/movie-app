import { FC, useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export const Login: FC = () => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(user, password);
  };
  return (
    <div className="space-y-6">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          value={user}
          onChange={(event) => setUser(event.target.value)}
          type="text"
          placeholder="Username"
        />
        <Input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Email"
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};
