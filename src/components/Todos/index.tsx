import { useContext } from "react";
import { TodosContext } from "../../store/todos-context";
import TodoItem from "../TodoItem";
import styles from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          onRemoveTodo={todosCtx.removeTodos.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
