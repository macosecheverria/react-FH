import { ChangeEvent, FormEvent, useState } from "react";

type FormType = {
  username?: string;
  email: string;
  password: string;
};

const useForm = (initialForm: FormType) => {
  const [formState, setFormState] = useState<FormType>(initialForm);

  const handleChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleResetForm = (e?: FormEvent<HTMLButtonElement>) => {
    e?.preventDefault();

    setFormState(initialForm);
  }

  return {
    ...formState,
    formState,
    handleChangeInput,
    handleResetForm
  };
}
 
export default useForm;