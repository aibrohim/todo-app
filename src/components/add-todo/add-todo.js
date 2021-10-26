import { useRef } from "react";
import "./add-todo.scss";

const AddTodo = ({setTodos}) => {
  const inputRef = useRef();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const inputValue = inputRef.current.value;
    if (inputValue.trim()) {
      setTodos((todos) => {
        return [
          ...todos,
          {
            id: Math.random(),
            title: inputValue,
            completed: false
          }
        ]
      });
    }
    inputRef.current.value = "";
    // Name, Description, Tags (<- 1ta input) (umumiy 3ta input)
  };

  return (
    <form onSubmit={handleFormSubmit} className="add-todo" action="#">
      <input ref={inputRef} placeholder="Todo name" className="add-todo__input" type="text" />
      <button className="add-todo__submit" type="submit" >Add todo</button>
    </form>
  );
};

export default AddTodo;