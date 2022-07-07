import { useFetch, useCounter } from "../hooks";
import { LoadingQuotes, QuotesBlock } from "./index";
import "./styles.css";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  //si la data tiene un valor toma la data en la posicion 0, si !!data es true va a ejecutar data[0]
  //por defecto author y quote devuelve undefined, con la doble negacion estamos haciendo que undefiend sea FALSE.

  return (
    <>
      <h1> Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? (
        <LoadingQuotes />
      ) : (
        <QuotesBlock author={author} quote={quote} />
      )}

      <button
        onClick={() => decrement()}
        disabled={isLoading}
        className="btn btn-primary"
      >
        Previous Quotes
      </button>
      <button
        onClick={() => increment()}
        disabled={isLoading}
        className="btn btn-primary "
      >
        Next Quotes
      </button>
    </>
  );
};
