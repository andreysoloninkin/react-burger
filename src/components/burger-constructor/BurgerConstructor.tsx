import React from 'react';
import {useCallback} from 'react';
import BurgerConstructorItem from '../burger-constructor-item/BurgerConstructorItem';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import CurrencyIconCustom from '../CurrencyIconCustom/CurrencyIconCustom';
import styles from './BurgerConstructor.module.css';
import { AppContext } from '../../services/appContext.js';
import { API_PATH } from '../../utils/api.js';
import OrderDetails from '../order-details/OrderDetails';
import Modal from '../modal/Modal';
import { useDrop } from 'react-dnd';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { ADD_INGREDIENT, CLEAR_ORDER, SET_ORDER, OPEN_MODAL_ORDER, CLOSE_MODAL_ORDER } from '../../services/actions';
import { isTemplateMiddle } from 'typescript';

function BurgerConstructor() {
  const dispatch = useDispatch();  
  //@ts-ignore
  const bun:Array = useSelector(state => state.constructor.bun);
  //@ts-ignore
  const items:Array = useSelector(state => state.constructor.items);
  //@ts-ignore
  const order = useSelector(state => state.order);
  //@ts-ignore
  const openOrderModal = useSelector(state => state.modalOrder);
  
  //const [openOrderModal, setOpenOrderModal] = React.useState(false);

  const getOrderID = async () => {
    const data = bun.concat(items).map((item)=>(item._id));
    try{
      const res = await fetch(API_PATH+"orders", {method: 'POST', mode: 'cors', body: JSON.stringify({"ingredients":data}), headers: {'Content-Type': 'application/json'}});
      if (res.ok) {
        const json = await res.json();
        //console.log(json);
        dispatch({type: SET_ORDER, data: json});
      }else{
        console.log('APP_ERROR1:',res);
      }
    }catch (error){
      console.log('APP_ERROR2:',error);
    }
  };

  function onDropHandler(item){
    //console.log('onDropHandler', item);
    dispatch({
      type: ADD_INGREDIENT,
      item: item.item
    });
  }

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
        onDropHandler(item);
    },
  });


  function clickOrder(){
    dispatch({type:CLEAR_ORDER});
    setTimeout(() => {getOrderID();}, 3000);
    
    //setOpenOrderModal(true);
    dispatch({type:OPEN_MODAL_ORDER});
  }

  //const items = state.order;
  
  const itemtop = (Array.isArray(bun) && bun.length>0)?bun[0]:false;
  const itembot = itemtop;
  let total = 0;
    if (Array.isArray(bun) && bun.length>0) total+=2*bun[0].price;
    if (Array.isArray(items) && items.length>0) total+= items.map((item)=>item.price).reduce((prev, curr)=>(prev+curr));

  return (
    <>
      <div className={`${styles.Burger_constructor} ml-10 pt-25`} ref={dropTarget}>
        {itemtop?
        <div className={`${styles.constructor_item} mb-4 ml-4 mr-4`}><span className={styles.drag_space}></span>
          <ConstructorElement type="top" isLocked={true} text={`${itemtop.name} (верх)`} price={itemtop.price} thumbnail={itemtop.image} />
        </div>:``
        }
        <div className={`${styles.constructor_list} custom-scroll`} >
          {Array.isArray(items)?
            items.map((item, i)=> <BurgerConstructorItem key={`citem_${i}`} item={item} index={i} /> ):
            ``
          }        
        </div>

        {itembot?
        <div className={`${styles.constructor_item} mb-4 ml-4 mr-4`}><span className={styles.drag_space}></span>
          <ConstructorElement type="bottom" isLocked={true} text={`${itembot.name} (низ)`} price={itembot.price} thumbnail={itembot.image} />
        </div>:``
        }

        <div className={`${styles.constructor_total} pt-10 pb-1 pr-4`}>
          <span className="text text_type_digits-medium mr-2">{total}</span>
          <CurrencyIconCustom size="32" color="#ffffff" className="mr-10"/>
           
        {itemtop?
          <Button type="primary" size="large" onClick={()=>{clickOrder()}}>Оформить заказ</Button>:
          <Button type="primary" size="large" disabled>Оформить заказ</Button>
        }
           
        </div>
      </div>
      {openOrderModal && (<Modal id="modal_order" isOpen={openOrderModal} onCloseRequest={() => {dispatch({type:CLOSE_MODAL_ORDER});}} title="">
        <OrderDetails /*items={items}*/  />
      </Modal>)}
    </>
  );
}

export default BurgerConstructor;