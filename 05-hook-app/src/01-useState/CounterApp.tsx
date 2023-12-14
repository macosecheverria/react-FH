import { useState } from "react";

type TypeCounter = {
  counter1: number;
  counter2: number;
  counter3: number;
};

const CounterApp: React.FC = () => {
  const [{ counter1, counter2, counter3 }, setCounter] = useState<TypeCounter>({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const sumar = (): void => {
    setCounter((prevState) => ({
      ...prevState,
      counter1: prevState.counter1 + 1,
    }));
  };

  const restar = (): void => {
    if (counter1 < 1) return;
    setCounter((prevState) => ({
      ...prevState,
      counter1: prevState.counter1 - 1,
    }));
  };

  return (
    <div>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>
      <hr />
      <button className="btn btn-primary" onClick={sumar}>
        +1
      </button>
      <button className="btn btn-primary" onClick={restar}>
        -1
      </button>
    </div>
  );
};

export default CounterApp;
