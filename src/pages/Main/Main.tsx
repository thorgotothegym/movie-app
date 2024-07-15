import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "../../components/ui/page-header";
import { userFilms } from "../../api/films/query";

export const Main = () => {
  const [title, setTitle] = useState<any>(null);
  const { data, isLoading, isError } = userFilms({ title });

  const handleChange = (value: string) => {
    setTitle(value);
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        id={title}
        name={title}
        value={title}
        onChange={(event) => {
          const { value } = event.target;
          handleChange(value);
        }}
      />
      <Button type="submit">send</Button>
    </div>
  );
};
