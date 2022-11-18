import react from "react";
import './TodoItem.css'

function TodoItem(props) {
    /*const onComplete = () => {
        alert('Ya completaste el TODO' + ' ' + props.text);
    };
    const onDelete = () => {
        alert('Borraste el TODO' + props.text);
    };*/
    return (
        <li className="TodoItem">
            <span onClick={props.onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            >√
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
            >
                {props.text}
            </p>
            <span className="Icon Icon-delete" onClick={props.onDelete} >x</span>
        </li>
    );
}

export { TodoItem };