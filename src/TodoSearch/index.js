import { render } from "@testing-library/react";
import React from "react";
import './TodoSearch.css';
import {TodoContext} from '../TodoContext';

function TodoSearch(){


   /* Como se usaba anteriormente ahora se usan funciones

   class Componente extends React.Component{
        constructor{
            this.state = {
                nombre:'Juan'
            };
        }
        render(){
            return{
                <div>{this.state.nombre}</div>
                this.state.Nombre
            }
        }
    }*/
    const {searchValue,setSearchValue} = React.useContext(TodoContext);
    const onChangeValue = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return(
        <input className="TodoSearch" 
        placeholder="Search" 
        value={searchValue} 
        onChange={onChangeValue} />
    );
}
export {TodoSearch};