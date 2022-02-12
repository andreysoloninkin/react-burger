import React from 'react';
import styles from './OrderDetails.module.css';
import status_icon from '../../images/status_icon.png';
import status_icon_loading from '../../images/status_icon_loading.png';
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { AppContext } from '../../services/appContext.js';
import { RootStateOrAny, useSelector } from 'react-redux';

function OrderDetails() {
    //const [state, changeState] = React.useContext(AppContext);
    //@ts-ignore
    const order = useSelector(state => state.order);
    let orderid = 0;
    if(order.order !== undefined) orderid = order.order.number;
    
    let statusName = 'Ваш заказ начали готовить';
    let statusDesc = 'Дождитесь готовности на орбитальной станции';
    let statusIcon = (<img src={status_icon} alt="OK"/>);

    if(orderid === 0)
    {
        statusName = 'Получение номера заказа';
        statusDesc = 'Подожите, пожалуйста, идет отправка заказа';
        statusIcon = (<img src={status_icon_loading} alt="OK" className={`${styles.status_icon_loading}`}/>);
    }



    return (
      <>
        <div className={`${styles.title} text text_type_digits-large`}>{orderid>0?orderid:`-`}</div>
        <div className={`${styles.title_desc} text text_type_main-medium mt-8`}>идентификатор заказа</div>
        <div className={`${styles.status_icon} mt-15 mb-15`}>
          {statusIcon}
        </div>
        <div className={`${styles.status_name} text text_type_main-default`}>{statusName}</div>
        <div className={`${styles.status_desc} mt-2 mb-15 text text_type_main-default text_color_inactive`}>{statusDesc}</div>
      </>
    );
  }

export default OrderDetails;