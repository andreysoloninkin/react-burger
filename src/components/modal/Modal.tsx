import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/ModalOverlay';

function Modal(props) {
  const result =
      <div className={`${styles.container} pt-10 pl-10 pr-10 pb-15`} onClick={(e)=>{e.stopPropagation()}}>
        <div className={`${styles.header} text text_type_main-large`}>
          <span>{props.title}</span>
          <span onClick={() => {props.onCloseRequest(); }} className={styles.btn_close}><CloseIcon type="primary" /></span>
        </div>
        <div className={`${styles.body}`}>
          {props.children}
        </div>
      </div>
      
  React.useEffect(() => {
    function pressKey(e){
      if(e.key === "Escape") {
        props.onCloseRequest();
      }
    }
    document.addEventListener("keydown", pressKey, false);
    return () => {
      document.removeEventListener("keydown", pressKey);
    }
  }, [props.onCloseRequest]); 

  return ReactDOM.createPortal(
    (
      <ModalOverlay 
        id={props.id} 
        isOpen={props.isOpen} 
        onClick={() => {
          props.onCloseRequest();
          console.log('#');
        }}
        >
        {result}
      </ModalOverlay>
    ),
    document.getElementById('modal-root')!
  );
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onCloseRequest: PropTypes.func.isRequired,
  title: PropTypes.string
}

export default Modal;