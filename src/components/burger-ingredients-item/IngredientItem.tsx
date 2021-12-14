import React from 'react';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import './IngredientItem.css';

function IngredientItem(props){
  //console.log(props.className);
  const s = props.className + " ingredient-item";
  return (
    <div className={s}>
        <Counter count={1} size="default" />
        <div className="ingredient-pic ml-4 mr-4 mb-1"><img src="https://code.s3.yandex.net/react/code/bun-02.png" /></div>
        <div className="ingredient-price mb-1"><span className="text text_type_main-medium mr-1">20</span><CurrencyIcon type="primary" /></div>
        <div className="ingredient-title">Краторная булка N-200i {props.className}</div>
    </div>
  );
}

export default IngredientItem;