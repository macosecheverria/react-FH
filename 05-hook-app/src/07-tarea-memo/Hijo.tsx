import React from "react";

type Props = {
  numero: number;
  incrementar: (value: number) => void;
};

const Hijo = React.memo(({ numero, incrementar }: Props) => {
  console.log("Me volvi a generar");

  return (
    <>
      <button
        className="btn btn-primary mr-3"
        onClick={() => incrementar(numero)}
      >
        {numero}
      </button>
    </>
  );
});

export default Hijo;
