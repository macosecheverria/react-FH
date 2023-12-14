import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber: number = 100): string => {
  for(let i = 0; i < iterationNumber; i++){
    console.log("Ahi vamos...");
  }

  return `${iterationNumber} iteraziones realizadas`;
}

const MemoHook = () => {
  const { counter, sumar } = useCounter(30);
  const [show, setShow] = useState<boolean>(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>
      <button className="btn btn-primary" onClick={() => sumar()}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default MemoHook;
