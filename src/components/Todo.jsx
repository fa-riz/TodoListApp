import { useState } from "react";
import Todoitem from "./Todoitem";
import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./Footer";
export default function Todo() {
  const [todos, setTodods] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <div>
      <Form todos={todos} setTodods={setTodods} />
      <Todolist todos={todos} setTodods={setTodods} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos}></Footer>
    </div>
  );
}
