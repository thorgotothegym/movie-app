import { FC, useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export const Register: FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // check logic and redirect to
  };
  return (
    <div className="space-y-6">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          type="text"
          placeholder="Username"
        />
        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="password"
          placeholder="Email"
        />
        <Button type="submit">Create my account</Button>
      </form>
    </div>
  );
};
