import React from 'react';
import './ModalOverlay.css';
import cx from 'classnames';
import PropTypes from 'prop-types';

function ModalOverlay(props) {
    return (
        <div
          onClick={() => {
            props.onClick();
            console.log('!');
          }}
          className={cx('overlay', { 'overlay--open': props.isOpen })}
          id={props.id}
        >
          <div className="modal">
            {props.children}
          </div>
        </div>
    );
  }

ModalOverlay.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func
}

export default ModalOverlay;