import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "../../components/ui/page-header";

export const Main = () => {
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading className="hidden md:block">
          Check out some examples
        </PageHeaderHeading>
        <PageHeaderHeading className="md:hidden">Examples</PageHeaderHeading>
        <PageHeaderDescription>
          Dashboard, cards, authentication. Some examples built using the
          components. Use this as a guide to build your own.
        </PageHeaderDescription>
        <PageActions></PageActions>
      </PageHeader>
      <section>
        <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow"></div>
      </section>
    </div>
  );
};
