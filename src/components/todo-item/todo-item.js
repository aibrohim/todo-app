import "./todo-item.scss";

const TodoItem = ({id, title, completed}) => {
  return (
    <li className={"todo " + (completed ? "todo--done" : "")}>
      <input defaultChecked={completed} value={id} className="todo__checkbox" type="checkbox" />
      <p className= "todo__name">{title}</p>

      <button data-id={id} className="todo__action todo__delete">Delete todo</button>
    </li>
  );
}; 

export default TodoItem;