import {  useState } from "react";

interface Props {
  onNewCategory: (newCategoria : string) => void;
}
const  AddCategory: React.FC<Props> = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState<string>(" ");

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(target.value);
  };

  const onSubmit  =  (e: React.FormEvent): void  => {
    e.preventDefault();
    if(inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
      <button onSubmit={onSubmit}>Agregar</button>
      <ol></ol>
    </form>
  );
}

export default AddCategory;
