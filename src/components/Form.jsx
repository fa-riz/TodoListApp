import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodods }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    setTodods([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputcontainer}>
          <input
            className={styles.moderninput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            type="text"
            placeholder="enter the item"
          />
          <button className={styles.modernbutton} type="submit">
            ADD ELEMENT
          </button>
        </div>
      </form>
    </div>
  );
}
