import { useContext, useRef } from "react";
import { TodosContext } from "../../store/todos-context";
import styles from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTodo = inputRef.current!.value;

    inputRef.current!.value = "";

    if (enteredTodo?.trim().length === 0) {
      // TODO: throw new Error
      return;
    }

    todosCtx.addTodos(enteredTodo);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo</label>
      <input ref={inputRef} type="text" id="text" />
      <button>Submit</button>
    </form>
  );
};

export default NewTodo;
