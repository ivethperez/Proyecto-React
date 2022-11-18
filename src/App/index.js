//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { AppUI } from "./AppUI";
import {TodoProvider} from '../TodoContext'
/*const defaulttodos = [{text : 'Cortar cebolla', completed: true},
{text : 'Tomar el curso de intro a React', completed: false},
{text : 'Lo que sea', completed: true}
];*/


function App() {
  // console.log('Render antes de useEffect');
  // React.useEffect(() =>{
  //   console.log('use effect');

  // },[totalTodos]);

  // console.log('Render despues de useEffect');
  return (
   <TodoProvider>
     <AppUI />
   </TodoProvider>
  );
}

export default App;
