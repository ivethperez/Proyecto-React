import React from "react";
import { TodoContext } from "../TodoContext";

function Todoform(){
    const [newTodoValue, setNewTodoVale] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event)=>{
    setNewTodoVale(event.target.value);
    };
    const onCancel = ()=>{
        setOpenModal(false);
    };
    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="new" value={newTodoValue} onChange={onChange}></textarea>
            <div>
                <button type="button" onClick={onCancel}>Cancelar</button>
                <button type="submit">Añadir </button>
            </div>
        </form>
    )
}

export {Todoform};