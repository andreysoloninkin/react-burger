import styles from './OrderDetails.module.css';
import status_icon from '../../images/status_icon.png';


function OrderDetails() {
    return (
      <>
        <div className={`${styles.title} text text_type_digits-large`}>{'034536'}</div>
        <div className={`${styles.title_desc} text text_type_main-medium mt-8`}>идентификатор заказа</div>
        <div className={`${styles.status_icon} mt-15 mb-15`}>
            <img src={status_icon} alt="OK"/>
        </div>
        <div className={`${styles.status_name} text text_type_main-default`}>Ваш заказ начали готовить</div>
        <div className={`${styles.status_desc} mt-2 mb-15 text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</div>
      </>
    );
  }

export default OrderDetails;