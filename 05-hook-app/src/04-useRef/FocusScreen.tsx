import { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onclick = () => {
    inputRef.current?.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Escribe tu nombre"
        className="form-control"
      />
      <button className="btn btn-primary mt-2" onClick={onclick}>
        Focus
      </button>
    </>
  );
};

export default FocusScreen;
