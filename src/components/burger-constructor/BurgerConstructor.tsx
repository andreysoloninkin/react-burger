import React from 'react';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import CurrencyIconCustom from '../CurrencyIconCustom/CurrencyIconCustom';
import styles from './BurgerConstructor.module.css';
import { AppContext } from '../../services/appContext.js';
import { API_PATH } from '../../utils/api.js';
import OrderDetails from '../order-details/OrderDetails';
import Modal from '../modal/Modal';

function BurgerConstructor() {

  const [state, changeState] = React.useContext(AppContext);

  const [openOrderModal, setOpenOrderModal] = React.useState(false);

  const getOrderID = async () => {
    let data = {ingredients: state.order.map((item)=>item._id)};
    console.log('data=', JSON.stringify(data));
    try{
      const res = await fetch(API_PATH+"orders", {method: 'POST', mode: 'cors', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}});
      if (res.ok) {
        const json = await res.json();
        changeState({type:"orderid", data:json});
      }else{
        console.log('APP_ERROR:',res);
      }
    }catch (error){
      console.log('APP_ERROR:',error);
    }
  };

  function clickOrder(){
    getOrderID();
    setOpenOrderModal(true);
  }

  const items = state.order;
  const itemtop = items.filter((item)=>(item.type==="bun"))[0];
  const itembot = itemtop;

  return (
    <>
      <div className={`${styles.Burger_constructor} ml-10 pt-25`}>
        {itemtop?
        <div className={`${styles.constructor_item} mb-4 ml-4 mr-4`}><span className={styles.drag_space}></span>
          <ConstructorElement type="top" isLocked={true} text={`${itemtop.name} (верх)`} price={itemtop.price} thumbnail={itemtop.image} />
        </div>:``
        }
        <div className={`${styles.constructor_list} custom-scroll`}>
          {items.filter((item, i) => (item.type!=="bun")).map((item)=>
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
          <span className="text text_type_digits-medium mr-2">{state.total}</span>
          <CurrencyIconCustom size="32" color="#ffffff" className="mr-10"/>
          <Button type="primary" size="large" onClick={()=>{clickOrder()}}>Оформить заказ</Button>
        </div>
      </div>
      <Modal id="modal_order" isOpen={openOrderModal} onCloseRequest={() => {setOpenOrderModal(false);}} title="">
        <OrderDetails /*items={items}*/  />
      </Modal>
    </>
  );
}

export default BurgerConstructor;