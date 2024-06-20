import Info from "./components/Info";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

export default function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Info />
      <Todos />
    </TodosContextProvider>
  );
}
