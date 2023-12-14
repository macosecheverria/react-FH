import { FormEvent } from "react";
import { useForm } from "../../hooks";
import { TodoState } from "../todoReducer";

type Props ={
  onNewTodo: (todo: TodoState) => void
}


const TodoAdd = ({onNewTodo}:Props) => {
  const {email, handleChangeInput,handleResetForm} = useForm({email: "", password: ""});

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(email.length <= 1) return;

    const newTodo: TodoState ={
      id: new Date().getTime() * 3,
      done: false    ,
      description: email  
    }

    onNewTodo(newTodo);
    handleResetForm()
  }

    
    return (  
        <form  onSubmit={onFormSubmit}>
            <input
              type="text"
              placeholder="Que hay que hacer? "
              className="form-control"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
            <button type="submit" className="btn  btn-outline-primary mt-2" >
              Agregar
            </button>
            <button  className="btn btn-outline-danger mt-2" onClick={handleResetForm}>Reset</button>
          </form>
    );
}
 
export default TodoAdd;