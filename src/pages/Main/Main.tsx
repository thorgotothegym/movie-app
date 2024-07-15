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
    <div className="container relative">
      <h1>{title}</h1>
      <h1>{isLoading && "loading"}</h1>
      {isError ? true : false}
      {JSON.stringify(data)}

      <PageHeader>
        <PageHeaderHeading className="hidden md:block">
          Check out some examples
        </PageHeaderHeading>
        <PageHeaderHeading className="md:hidden">Examples</PageHeaderHeading>
        <PageHeaderDescription>
          Dashboard, cards, authentication. Some examples built using the
          components. Use this as a guide to build your own.
        </PageHeaderDescription>
        <PageActions>Some Actions</PageActions>
      </PageHeader>
      <section>
        <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
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
        </div>
      </section>
    </div>
  );
};
