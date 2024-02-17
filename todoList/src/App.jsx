import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange() {
    setTodos([...todos, todo]);
    setTodo("");
  }

  function handleLi(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    console.log(newTodos)
    setTodos(newTodos);
  }

  return (
    <>
      <h1>TO DO LIST </h1>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} type='text' />
      <button onClick={handleChange}>add</button>
      <ul>
        {todos.map((el, index) => {
          return (
            <li key={index} onClick={() => handleLi(index)}>{el}</li>
          );
        })}
      </ul>
    </>
  );
}


export default App;
