import React from "react";
import ReacDOM from 'react-dom';
import '../Modal/modal.css'

 function Modal(children){
     return ReacDOM.createPortal(
         <div className="ModalBackground">
{children}
</div>,
document.getElementById('modal')
     );
 }

 export {Modal};

