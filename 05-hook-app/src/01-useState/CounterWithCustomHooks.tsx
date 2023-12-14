import { useCounter } from "../hooks/useCounter";

const CounterWithCustomHooks = () => {
  const { counter, sumar, restar, reset } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter} </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => sumar(2)}>
        Incrementar
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => restar(2)}>
        Decrementar
      </button>
    </>
  );
};

export default CounterWithCustomHooks;
