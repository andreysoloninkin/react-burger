import React from 'react';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import CurrencyIconCustom from '../CurrencyIconCustom/CurrencyIconCustom';
import styles from './BurgerConstructor.module.css';

function BurgerConstructor(props) {
  //console.log('BurgerConstructor');
  //console.log(props);

  const items = props.order;
  //console.log(items[0]);

  const j = items.length;
  //console.log(j);

  const itemtop = items[0];
  const itembot = items[j-1];

  return (
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
        <span className="text text_type_digits-medium mr-2"></span>
        <CurrencyIconCustom size="32" color="#ffffff" className="mr-10"/>
        <Button type="primary" size="large">Оформить заказ</Button>
      </div>
    </div>
  );
}

export default BurgerConstructor;