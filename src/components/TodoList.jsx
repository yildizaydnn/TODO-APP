import React from 'react'
import Todo from './Todo.jsx'

function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
    return (
        <div style={{ width: '100%', marginTop: '30px' }}>
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
                ))
            }


        </div>
    )
}

export default TodoList