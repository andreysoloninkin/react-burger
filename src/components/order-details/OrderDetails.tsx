import PropTypes from 'prop-types';
import styles from './OrderDetails.module.css';
import {CheckMarkIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import status_icon from '../../images/status_icon.png';


function OrderDetails(props) {
    //console.log(props);
    //const item = props.item;
    return <>
            <div className={`${styles.title} text text_type_digits-large`}>{'034536'}</div>
            <div className={`${styles.title_desc} text text_type_main-medium mt-8`}>идентификатор заказа</div>
            <div className={`${styles.status_icon} mt-15 mb-15`}>
                <img src={status_icon} />
            </div>
            <div className={`${styles.status_name} text text_type_main-default`}>Ваш заказ начали готовить</div>
            <div className={`${styles.status_desc} mt-2 mb-15 text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</div>
    </>;
  }
  
OrderDetails.propTypes = {
    close: PropTypes.func,
    items: Array(
        PropTypes.shape({
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
    )
}

  export default OrderDetails;