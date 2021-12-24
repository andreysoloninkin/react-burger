import React from 'react';
//import ReactDOM from 'react-dom';
import './ModalOverlay.css';
//import {modalObserver} from '../modal-observer/ModalObserver';
import cx from 'classnames';

//const modalRoot = document.getElementById("react-modals")!;

function ModalOverlay(props) {
  //const [isOpen, setIsOpen] = React.useState(props.isOpen);

  //if (props.isOpen) setIsOpen(true);

  //console.log('ModalOverlay', props.isOpen);
  /*
    const [isOpen, setIsOpen] = React.useState(false);
    const [child, setChild] = React.useState(null);
    const [onClose, setOnClose] = React.useState(() => {
      return () => {};
    });
  */
  
    /*
    modalObserver.subscribe((value: any) => {
      //console.log("On overlay", value);
      setIsOpen(value[0]);
      //setChild(value[1]);
      setOnClose(() => value[2]);

    });
    */
  
    return (
        <div
          onClick={() => {
            props.onClick();
            console.log('!');
          }}
          className={cx('overlay', { 'overlay--open': props.isOpen })}
        >
          <div className="modal">
            {props.children}
          </div>
        </div>
    );
  }

export default ModalOverlay;