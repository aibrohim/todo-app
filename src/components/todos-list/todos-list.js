import TodoItem from "../todo-item/todo-item";
import "./todos-list.scss";

const TodosList = ({todos, setTodos}) => {
  const handleListChange = (evt) => {
    if (evt.target.matches(".todo__checkbox")) {
      const changedItemIndex = todos.findIndex((todo) => todo.id === +evt.target.value)
      const changedItem = todos[changedItemIndex];
      const changeItem = {
        ...changedItem,
        completed: !changedItem.completed
      };

      setTodos([
        ...todos.slice(0, changedItemIndex),
        changeItem,
        ...todos.slice(changedItemIndex + 1)
      ])
    }
  }

  const handleListClick = (evt) => {
    if (evt.target.matches(".todo__delete")) {
      const clickedItemIndex = todos.findIndex((todo) => todo.id === +evt.target.dataset.id)

      setTodos([
        ...todos.slice(0, clickedItemIndex),
        ...todos.slice(clickedItemIndex + 1)
      ])
    }
  }

  return (
    <ul onChange={handleListChange} onClick={handleListClick} className="todos-list">
      {
        todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
      }
    </ul>
  );
};

export default TodosList;