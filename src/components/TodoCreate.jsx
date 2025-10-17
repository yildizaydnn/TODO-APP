import React from 'react'
import '../App.css'

function TodoCreate() {
    return (
        <div className='todo-create'>
            <input className='todo-input' type="text" placeholder='Add a new todo' />
            <button className='todo-create-button'>Add Todo</button>
        </div>
    )
}

export default TodoCreate