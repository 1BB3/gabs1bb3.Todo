import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos = () => {
  const ctx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {ctx.items.map((item) => (
        <TodoItem
          key={item.id}
          todoText={item.text}
          //   onClick={() => ctx.removeTodo(item.id)} // similar
          onClick={ctx.removeTodo.bind(null, item.id)} // similar
        />
      ))}
    </ul>
  );
};

export default Todos;
