import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './IngredientItem.module.css';


function IngredientItem(props){

  //console.log(props);
  return (
    <>
      <div className={`${props.className} ${styles.ingredient_item}`} onClick={props.onClick}>
          <Counter count={1} size="default" />
          <div className={`${styles.ingredient_pic} ml-4 mr-4 mb-1`}><img src={props.image} /></div>
          <div className={`${styles.ingredient_price} mb-1`}>
            <span className="text text_type_main-medium mr-1">{props.price}</span>
            <CurrencyIcon type="primary" />
          </div>
          <div className={styles.ingredient_title}>{props.name}</div>
      </div>
    </>
  );
}

IngredientItem.propTypes =  { 
  key: PropTypes.string,
  onClick: PropTypes.func,
  tab: PropTypes.string,
  ingredients: PropTypes.shape({
      _id:PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      calories: PropTypes.number,
      carbohydrates: PropTypes.number,
      image:PropTypes.string,
      image_large:PropTypes.string,
      image_mobile:PropTypes.string,
      price:PropTypes.number,
      __v:PropTypes.number
    }),
  order: PropTypes.shape({
    _id:PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    calories: PropTypes.number,
    carbohydrates: PropTypes.number,
    image:PropTypes.string,
    image_large:PropTypes.string,
    image_mobile:PropTypes.string,
    price:PropTypes.number,
    __v:PropTypes.number
  })
}

export default IngredientItem;