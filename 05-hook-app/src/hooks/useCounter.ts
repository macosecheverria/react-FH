import { useState } from "react";

const useCounter = (initialValue: number = 1 ) => {
  const [counter, setCounter] = useState(initialValue);

  const sumar = (value:number =1):void=> {
    setCounter(counter + value);
  } 

  const restar = (value: number =1):void  => {
    if(counter < 1) return;
    setCounter(counter - value);
  }

const reset = ():void => {
    setCounter(initialValue);
  }

  return {
    counter,
    sumar,
    restar,
    reset
  }
}

export default useCounter;