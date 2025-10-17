import React, { useState } from 'react';
import { CiCircleRemove } from "react-icons/ci"; // Ci ikonları
import { FaEdit } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";



function Todo({ todo, onRemoveTodo, onUpdateTodo }) {

    const { id, content } = todo;

    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        onRemoveTodo(id);
    }

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }


    return (
        <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
            border: '1px solid #ccc', padding: '10px', marginTop: '10px'
        }}>
            <div>
                {
                    editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='todo-input' type="text" /> : content
                }
            </div>
            <div>
                <CiCircleRemove className='todo-icons' onClick={removeTodo} />
                {

                    editable ? <FaEdit className='todo-icons' onClick={updateTodo} /> :

                        <CiBookmarkCheck className='todo-icons' onClick={() => setEditable(true)} />
                }
            </div>
        </div>
    );

}

export default Todo;