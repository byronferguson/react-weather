import { titleCase } from "../utils/string.utils";

export function PageHeader({ location }) {
  return (
    <>
      <h1 className="mb-2 mt-8 text-center text-4xl font-bold">
        Weather Dashboard
      </h1>
      {location.length ? (
        <h2 className="mb-8 text-center text-3xl font-medium">
          for {titleCase(location)}
        </h2>
      ) : null}
    </>
  );
}
