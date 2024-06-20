import { createContext, useState } from "react";
import GLOBAL_PROPS from "../interfaces/global-props";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

interface TodosContextProviderProps extends GLOBAL_PROPS {}

export default function TodosContextProvider({
  children,
}: TodosContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    // setTodos((prevTodos) => [...prevTodos, new Todo(todoText)]);
    setTodos((prevTodos) => prevTodos.concat(new Todo(todoText)));
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
}
