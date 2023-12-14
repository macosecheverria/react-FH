import { useFetch, useCounter } from "../hooks";
import { Loading, Quote } from "../03-examples";

const Layout = () => {
  const { counter, sumar } = useCounter(1);

  const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;

  const { data, isLoading } = useFetch(url);

  return (
    <>
      <h1>Quotes Random</h1>
      <hr />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data.map((el, index) => (
            <Quote key={index} {...el} />
          ))}
        </>
      )}

      <button
        className="btn btn-primary"
        onClick={() => sumar()}
        disabled={isLoading}
      >
        Nexte Quote
      </button>
    </>
  );
};

export default Layout;
