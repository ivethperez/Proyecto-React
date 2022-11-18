import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreatedTodoButton } from '../CreatedTodoButton'
import { TodoContext } from '../TodoContext'
import {Modal} from '../Modal';
import { Todoform } from "../TodoForm";
function AppUI() {
  //Usar código JSX evitando llamar TodoContext.Consumer
  const {
    error, loading,
    searchTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
  } =  React.useContext(TodoContext);

  return (<React.Fragment>
    <TodoCounter />
    <TodoSearch />
    {/* <TodoContext.Consumer> */}
      {/* {() => ( */}
        <TodoList>
          {error && <p>hubo un error...</p>}
          {loading && <p>Esta cargando...</p>}
          {(!loading && !searchTodos.length) && <p>Crea tu primer TODO!..</p>}
          {searchTodos.mapp(todo => (
            <TodoItem key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

      {/* )} */}
    {/* </TodoContext.Consumer> */}

{!!openModal && (
   <Modal>
     {/* <p>{searchedTodos[0].text}</p> */}
     <Todoform/>
    </Modal>

)}
   
    <CreatedTodoButton 
    setOpenModal= {setOpenModal}
    />
  </React.Fragment>);
}
export { AppUI }