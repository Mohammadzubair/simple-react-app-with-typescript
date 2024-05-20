import { createContext, useState } from "react";
import Todo from "../../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodos: (text: string) => void;
  removeTodos: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodos: () => {},
  removeTodos: (id: string) => {},
});

interface TodosContextProviderProps {
  children: React.ReactNode;
}

const TodosContextProvider = ({ children }: TodosContextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodos: addTodoHandler,
    removeTodos: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
