import { ChangeEvent, useEffect, useState } from "react";
import Message from "./Message";

type FormType = {
  username: string;
  email: string;
};

const SimpleForm = () => {
  const [formState, setFormState] = useState<FormType>({
    username: "",
    email: "",
  });

  const { username, email } = formState;

  const handleChangeInput = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;

        setFormState({
          ...formState,
          [name]: value
        })
  }

  useEffect(() => {
    //console.log("useEffect called");
  }, [])

  useEffect(() => {
    //console.log("formState change");
  }, [formState]);

  useEffect(() => {
    //console.log("Email change");
  },[email]);

  return (
    <>
      <h1>Simple Form</h1>
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

      {
        (username === "strider2") &&  <Message/>
      }
      </>
  );
};

export default SimpleForm;
