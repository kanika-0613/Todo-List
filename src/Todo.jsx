import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {

    let [todolist, setTodolist] = useState([])
    let [toname, setToname] = useState("")


    let saveTodolist = (e) => {
        e.preventDefault();

        if (toname.trim() === ""){
            alert("Please enter a task")
            return;
        }

        if (!todolist.some((item)=> item.text === toname.trim())) {
            let finaldolist = [...todolist,
            {
                text: toname,
                completed: false
            }
            ]
            setTodolist(finaldolist);
            setToname("");

        }
        else {
            alert("This task already exists")
        }
    }

    let list = todolist.map((value, index) => {
        return (

            <Todolistitems value={value} key={index} indexno={index}

                todolist={todolist}
                setTodolist={setTodolist} />

        )
    })

    return (
        <div className='Todo'>

            <h1>To-Do List</h1>

            <form
                onSubmit={saveTodolist}>
                <input type='text' name='toname' value={toname} onChange={(e)=>setToname(e.target.value)}/><button>ADD</button>
            </form>

            <div className='outerdiv'>
                <ul>
                    {list}
                </ul>
            </div>

        </div>
    )
}

export default Todo;

function Todolistitems({ value, indexno, todolist, setTodolist }) {

    let deleteRow = () => {
        let finalData = todolist.filter((v, i) => i != indexno)
        setTodolist(finalData)
    }

    let completeTask = () => {
        let newList = [...todolist];

        newList[indexno].completed = !newList[indexno].completed;

        setTodolist(newList);
    }


    return (
        <li className={value.completed ? "completedtodo" : ""}>{indexno + 1}) {value.text}
            <span onClick={completeTask}>&#10004;</span>
            <span onClick={deleteRow}>&#10006;</span></li>
    )
}