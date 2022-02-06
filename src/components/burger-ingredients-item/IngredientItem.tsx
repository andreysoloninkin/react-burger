import PropTypes from 'prop-types';
import typeIngredient from '../../utils/type.js';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './IngredientItem.module.css';
import { useDrag } from "react-dnd";

function IngredientItem(props){
  //console.log(props);

  const item = props.item;

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: {item}
  });  

  return (
      <div className={`${props.className} ${styles.ingredient_item}`} onClick={props.onClick} ref={dragRef}>
          <Counter count={item.count?item.count:0} size="default" />
          <div className={`${styles.ingredient_pic} ml-4 mr-4 mb-1`}><img src={item.image} alt={item.name}/></div>
          <div className={`${styles.ingredient_price} mb-1`}>
            <span className="text text_type_digits-default mr-1">{item.price}</span>
            <CurrencyIcon type="primary" />
          </div>
          <div className={`${styles.ingredient_title} text text_type_main-default`}>{item.name}</div>
      </div>
  );
}

IngredientItem.propTypes =  {
  key: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  item: typeIngredient
}

export default IngredientItem;