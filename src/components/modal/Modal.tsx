//import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.module.css';


function Modal(props){

    const modalRoot = document.getElementById("react-modals")!;

    //const { children, header, onClose } = props;
    // Возвращаем ReactDOM.createPortal,
    // который поместит дочерние элементы в modalRoot
    return ReactDOM.createPortal(
      <div>
        <div className="Modal">
          <div></div>
          
        </div>
        <div>close</div>
      </div>,
      modalRoot
    );

}

export default Modal;