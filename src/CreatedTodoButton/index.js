import react from "react";
import './CreateTodoButton.css';

function CreatedTodoButton(props){

    const onClickButton = (props) => {
        const onClickButton = () =>{
            props.setOpenmodal(prevState => !prevState);
        }
        // alert(msg);
         // onClick={() => onClickButton('Aquí se debe de abrir el modal')}>+
    }
    return(
        <button className="CreateTodoButton" >      
        onClick={(onClickButton)}
        </button>
    );
}
export {CreatedTodoButton}