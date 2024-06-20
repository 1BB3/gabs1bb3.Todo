import { useContext, useRef, useState } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

export default function NewTodo() {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const [invalidText, setInvalidText] = useState<boolean>();
  const ctx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim() === "") {
      setInvalidText(true);
      return;
    }
    ctx.addTodo(enteredText);
    todoTextInputRef.current!.value = "";
    setInvalidText(undefined);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">
        Todo
        {invalidText && <span>&nbsp;&nbsp;cannot be empty!</span>}
      </label>
      <input
        type="text"
        name="todo-text"
        id="text"
        ref={todoTextInputRef}
        placeholder="Your Todo text."
      />
      <button>Add Todo</button>
    </form>
  );
}
