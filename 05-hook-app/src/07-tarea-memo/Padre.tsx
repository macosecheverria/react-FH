import { useCallback, useState } from "react";
import Hijo from "./Hijo";

const Padre = () => {
  const numeros: number[] = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState<number>(0);

  const incrementar = useCallback((numero: number = 1) => {
    setValor((valor) => valor + numero);
  }, []);

  return (
    <>
      <h1>Padre</h1>
      <p>Total: {valor}</p>
      <hr />

      {numeros.map((el, index) => (
        <Hijo key={index} numero={el} incrementar={incrementar} />
      ))}
    </>
  );
};

export default Padre;
