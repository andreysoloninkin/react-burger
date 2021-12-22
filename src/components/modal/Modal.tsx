import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import {modalObserver} from '../modal-observer/ModalObserver';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function Modal(props) {
  //console.log(props);
  const result = <>
      <div className={`${styles.container} pt-10 pl-10 pr-10 pb-15`} onClick={(e)=>{e.stopPropagation()}}>
        <div className={`${styles.header} text text_type_main-large`}>
          <span>{props.title}</span>
          <span onClick={() => {props.onCloseRequest(); }} className={styles.btn_close}><CloseIcon type="primary" /></span>
        </div>
        <div className={`${styles.body}`}>
          {props.children}
        </div>
      </div>
    </>

  function pressKey(e){
    if(e.keyCode === 27) {
      props.onCloseRequest();
    }
  }

  document.addEventListener("keydown", pressKey, false);

  React.useEffect(() => {
    if (props.isOpen) {
      modalObserver.setValue([props.isOpen, result, props.onCloseRequest]);
    } else {
      modalObserver.setValue([props.isOpen, null, () => {}]);
    }
  }, [props.isOpen]);

  /*return ReactDOM.createPortal(
    children,
    document.getElementById('modal')!
  );*/
  return <></>;
  // console.log(document.getElementById('modal'));
}

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onCloseRequest: PropTypes.func,
  title: PropTypes.string
}

export default Modal;