import { useCallback, useEffect, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState<number>(1);

  const increment = useCallback(
    (value: number = 1) => {
      setCounter((c) => c + value)
    } ,
      [],
    )

    useEffect(() => {
      increment()
    },[increment])

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <ShowIncrement increment={increment} />
    </>
  );
};

export default CallbackHook;
