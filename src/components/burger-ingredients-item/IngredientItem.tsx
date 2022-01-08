import PropTypes from 'prop-types';
import typeIngredient from '../../utils/type.js';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './IngredientItem.module.css';

function IngredientItem(props){
  console.log(props);
  return (
      <div className={`${props.className} ${styles.ingredient_item}`} onClick={props.onClick}>
          <Counter count={1} size="default" />
          <div className={`${styles.ingredient_pic} ml-4 mr-4 mb-1`}><img src={props.item.image} alt={props.item.name}/></div>
          <div className={`${styles.ingredient_price} mb-1`}>
            <span className="text text_type_digits-default mr-1">{props.item.price}</span>
            <CurrencyIcon type="primary" />
          </div>
          <div className={`${styles.ingredient_title} text text_type_main-default`}>{props.item.name}</div>
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