import React from 'react';
//import ReactDOM from 'react-dom';
import './ModalOverlay.css';
import {modalObserver} from '../modal-observer/ModalObserver';
import cx from 'classnames';

//const modalRoot = document.getElementById("react-modals")!;

function ModalOverlay() {
    const [isOpen, setIsOpen] = React.useState(true);
    const [child, setChild] = React.useState(null);
    const [onClose, setOnClose] = React.useState(() => {
      return () => {};
    });
  
    modalObserver.subscribe((value: any) => {
      //console.log("On overlay", value);
      setIsOpen(value[0]);
      setChild(value[1]);
      setOnClose(() => value[2]);

    });
  
    return (
      <>
        <div
          onClick={() => {
            onClose();
          }}
          className={cx('overlay', { 'overlay--open': isOpen })}
        >
          <div id="modal" className="modal">
            {child}
          </div>
        </div>
      </>
    );
  }

export default ModalOverlay;