import { useState } from "react";
import Todo from "./todo";

import "./todoApp.css";

export default function () {
    const [title, setTitle] = useState("Hola");
    const [todos, setTodos] = useState([]);

    function handleChange(e){
        const value =e.target.value;
        setTitle(value);

    }

    function handleSubmit(e){
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        setTodos([...todos, newTodo]);

        setTitle("");
    }

    function handleUpdate(id, value){
        const temp = [...todos];
        const item = temp.find(item => item.id == id);
        item.title = value;
        setTodos(temp);
    }

    function handleDelete(id){
         const temp = todos.filter(item => item.id !== id);
        setTodos(temp);
    }

    return (
    <div className="todoContainer">
        <form className="toDoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="toDoInput" value={title}/>
            <input onClick={handleSubmit} className="buttonCreate" type="submit" value="Crear tarea"/>
        </form>

        <div className="todosContainer">
            {
                todos.map(item => (
                    <Todo key={item.id} item= {item} onUpdate={handleUpdate} onDelete={handleDelete} />
                
                ))
            }
        </div>
    </div>
    );
}