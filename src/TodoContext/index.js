import React from "react";
import { useLocalStorage } from './useLocalStorage'
const TodoContext = React.createContext();

//puente para conectar de contex.provider a consumer

function TodoProvider(props) {
  const { item: todos
    , saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = [];

  if (!searchValue.length >= 1) {
    searchTodos = todos;
  }
  else {
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodos = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
    /*todos[todoIndex] = {
      text:todos[todoIndex].text,
      completed: true,
    };*/
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    //Cuando es objeto van {{}}
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchTodos,
      addTodos,
      completeTodos,
      deleteTodos,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>);
}
export { TodoContext, TodoProvider }