import React, { useState } from 'react'
import TodoCreate from './components/TodoCreate.jsx'
import './App.css'
import TodoList from './components/TodoList.jsx'


function App() {

  const [todos, setTodos] = useState([])

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };


  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {

      if (todo.id !== newTodo.id) {

        return todo;
      }

      return newTodo;
    });

    setTodos([updatedTodos]);
  };



  return (
    <div className="App">
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>

    </div>
  )
}

export default App