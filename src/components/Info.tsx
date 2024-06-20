import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./Info.module.css";
export default function Info() {
  const ctx = useContext(TodosContext).items;
  console.log(ctx);

  return (
    <div className={classes.info}>
      {ctx.length !== 0 && <p>...Click the todo to delete it. </p>}
      {ctx.length === 0 && (
        <p className={classes.gabs}>You don't have any Todos.</p>
      )}
    </div>
  );
}
