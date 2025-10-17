import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import '../App.css'

import '../App.css'

function Todo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #ccc', padding: '10px' }}>
            <div>
                Ben ilk todoyum
            </div>
            <div>
                <CiCircleRemove className='todo-icons' />
                <FaEdit className='todo-icons' />


            </div>
        </div>
    )
}

export default Todo