import React from 'react'
import TodoCreate from './components/TodoCreate.jsx'
import './App.css'
import TodoList from './components/TodoList.jsx'


function App() {
  return (
    <div className="App">
      <div style={{ width: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <TodoCreate />
        <TodoList />
      </div>

    </div>
  )
}

export default App