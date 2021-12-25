import PropTypes from 'prop-types';
import typeIngredient from '../../utils/type.js';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './IngredientItem.module.css';

function IngredientItem(props){
  return (
      <div className={`${props.className} ${styles.ingredient_item}`} onClick={props.onClick}>
          <Counter count={1} size="default" />
          <div className={`${styles.ingredient_pic} ml-4 mr-4 mb-1`}><img src={props.image} alt={props.name}/></div>
          <div className={`${styles.ingredient_price} mb-1`}>
            <span className="text text_type_main-medium mr-1">{props.price}</span>
            <CurrencyIcon type="primary" />
          </div>
          <div className={styles.ingredient_title}>{props.name}</div>
      </div>
  );
}

IngredientItem.propTypes =  {
  onClick: PropTypes.func,
  tab: PropTypes.string,
  ingredients: PropTypes.arrayOf(typeIngredient),
  order: PropTypes.arrayOf(typeIngredient)
}

export default IngredientItem;