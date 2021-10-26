import { useEffect, useState } from "react";
import AddTodo from "./components/add-todo/add-todo";
import TodosList from "./components/todos-list/todos-list";

function App() {
  const [todos, setTodos] = useState([]);
  let [number, setNumber] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
  }, []);

  useEffect(() => {
    console.log("todos o'zgardi");
  }, [todos]);

  return (
    <main className="main">
      <h1 className="main__title">Simple todo app</h1>

      <button onClick={() => setNumber(number + 1)}>{number}</button>

      <AddTodo todos={todos} setTodos={setTodos} />

      <TodosList setTodos={setTodos} todos={todos} />
    </main>
  );
}

export default App;
