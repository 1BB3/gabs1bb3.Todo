import classes from "./TodoItem.module.css";

interface TodoProps {
  todoText: string;
  onClick: () => void;
}

export default function TodoItem({ todoText, onClick }: TodoProps) {
  return (
    <li className={classes.item} onClick={onClick}>
      {todoText}
    </li>
  );
}
