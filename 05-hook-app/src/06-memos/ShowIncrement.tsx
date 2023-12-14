import React from "react";

type Props = {
  increment: (value: number) => void;
};

const ShowIncrement = React.memo(({ increment }: Props) => {
  console.log("Me volvi a generar :(");

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          increment(5);
        }}
      >
        Incrementar
      </button>
    </>
  );
});

export default ShowIncrement;
