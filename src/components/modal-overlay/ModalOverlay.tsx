//import React from 'react';
import ReactDOM from 'react-dom';
import './ModalOverlay.module.css';
//const modalRoot = document.getElementById("react-modals")!;
function ModalOverlay(props){
    return ReactDOM.createPortal(
        <div>
        </div>,
        props.root
    );
}

export default ModalOverlay;