import React from 'react';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './IngredientItem.module.css';

function IngredientItem(props){
  //console.log(props.className);
  return (
    <div className={`${props.className} ${styles.ingredient_item}`}>
        <Counter count={1} size="default" />
        <div className={`${styles.ingredient_pic} ml-4 mr-4 mb-1`}><img src={props.image} /></div>
        <div className={`${styles.ingredient_price} mb-1`}><span className="text text_type_main-medium mr-1">{props.price}</span><CurrencyIcon type="primary" /></div>
        <div className={styles.ingredient_title}>{props.name}</div>
    </div>
  );
}

export default IngredientItem;