import React from 'react';
import PropTypes from 'prop-types';
import typeIngredient from '../../utils/type.js';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
//import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import CurrencyIconCustom from '../CurrencyIconCustom/CurrencyIconCustom';
import styles from './BurgerConstructor.module.css';
import OrderDetails from '../order-details/OrderDetails';
import Modal from '../modal/Modal';

function BurgerConstructor(props) {

  const [openOrderModal, setOpenOrderModal] = React.useState(false);

  function clickOrder(){
    //console.log(el);
    setOpenOrderModal(true);
  }

  const items = props.order;
  //console.log(items[0]);

  const j = items.length;
  //console.log(j);

  const itemtop = items[0];
  const itembot = items[j-1];

  return (
    <>
    <div className={`${styles.Burger_constructor} ml-10 pt-25`}>
      {itemtop?
      <div className={`${styles.constructor_item} mb-4 ml-4 mr-4`}><span className={styles.drag_space}></span>
        <ConstructorElement type="top" isLocked={true} text={`${itemtop.name} (верх)`} price={itemtop.price} thumbnail={itemtop.image} />
      </div>:``
      }
      <div className={`${styles.constructor_list} custom-scroll`}>
        {items.filter((item, i) => (i>0 && i<j-1)).map((item)=>
              <div key={item._id} className={`${styles.constructor_item} dragable mb-4 ml-4 mr-2`}>
                <span className={styles.drag_space}><DragIcon type="primary" /></span>
                <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
              </div>    
            )}        
      </div>

      {itembot?
      <div className={`${styles.constructor_item} mb-4 ml-4 mr-4`}><span className={styles.drag_space}></span>
        <ConstructorElement type="bottom" isLocked={true} text={`${itembot.name} (низ)`} price={itembot.price} thumbnail={itembot.image} />
      </div>:``
      }

      <div className={`${styles.constructor_total} pt-10 pb-1 pr-4`}>
        <span className="text text_type_digits-medium mr-2">12345</span>
        <CurrencyIconCustom size="32" color="#ffffff" className="mr-10"/>
        <Button type="primary" size="large" onClick={()=>{clickOrder()}}>Оформить заказ</Button>
      </div>
    </div>
    <Modal id="modal_order" isOpen={openOrderModal} onCloseRequest={() => {setOpenOrderModal(false);}} title="">
      <OrderDetails items={items} /*close={() => {setOpenOrderModal(false); }}*/  />
    </Modal>
    </>
  );
}

BurgerConstructor.propTypes =  { 
  tab: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(typeIngredient),
  order: PropTypes.arrayOf(typeIngredient)
}

export default BurgerConstructor;