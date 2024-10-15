import styles from "./todoitem.module.css";
export default function Todoitem({ item, todos, setTodods }) {
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodods(newArray);
    console.log(todos);
  }
  function handledelete(item) {
    console.log(item);

    setTodods(todos.filter((todo) => todo !== item));
  }
  const className = item.done ? styles.completed : " ";
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handledelete(item)}
            className={styles.deletebutton}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
