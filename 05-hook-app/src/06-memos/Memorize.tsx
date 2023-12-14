import { useState } from "react";
import { useCounter } from "../hooks";
import Small from "./Small";

const Memorize = () => {
  const { counter, sumar } = useCounter(1);
  const [show, setShow] = useState<boolean>(true);

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => sumar()}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default Memorize;
