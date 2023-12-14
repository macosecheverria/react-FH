import { useEffect } from "react";
import useForm from "../hooks/useForm";

const FormWithCustomHook = () => {
  const {
    formState,
    handleChangeInput,
    handleResetForm,
    username,
    email,
    password,
  } = useForm({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    //console.log("useEffect called");
  }, []);

  useEffect(() => {
    //console.log("formState change");
  }, [formState]);

  useEffect(() => {
    //console.log("Email change");
  }, [email]);

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleChangeInput}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleChangeInput}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={handleChangeInput}
      />
      <button className="btn btn-primary mt-2" onClick={handleResetForm}>
        Borrar
      </button>
    </>
  );
};

export default FormWithCustomHook;
