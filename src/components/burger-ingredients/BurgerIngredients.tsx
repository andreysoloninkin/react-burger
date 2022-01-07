import React from 'react';
import styles from './BurgerIngredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import { AppContext } from '../app/appContext.js';
import IngredientItem from '../burger-ingredients-item/IngredientItem';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import Modal from '../modal/Modal';


function BurgerIngredients() {
  const [state, changeState] = React.useContext(AppContext);

  const [modalItem, setModalItem] = React.useState(null);
  const [current, setCurrent] = React.useState(state.tab);//props.tab
  
  function clickTab(e){
    setCurrent(e);
    document.getElementById(e+"-list")?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  function clickItem(el){
    setModalItem(el);
  }

  const items = state.ingredients; //props.ingredients;

  return (
    <div className={`${styles.Burger_ingredients} pt-10 pb-10`}>
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <div className={styles.ingredients_tab}>
          <Tab value="bun" active={current === 'bun'} onClick={clickTab}>Булки</Tab>
          <Tab value="sauce" active={current === 'sauce'} onClick={clickTab}>Соусы</Tab>
          <Tab value="main" active={current === 'main'} onClick={clickTab}>Начинки</Tab>
        </div>
        <div className={`${styles.ingredients_list} custom-scroll`}>
          <p id="bun-list" className={`${styles.ingredients_category_title} text text_type_main-medium mt-10 mb-6`}>Булки</p>
          <div className={`${styles.ingredients_category_list}`}>
            {items.filter(item => item.type==="bun").map((item, index)=>
              <IngredientItem key={item._id} className={index%2===0?`ml-4 mb-6`:`ml-6 mb-6`} {...item} onClick={()=>{clickItem(item)}}/>
            )}
          </div>
          <p id="sauce-list" className="text text_type_main-medium mt-10 mb-6">Соусы</p>
          <div className={`${styles.ingredients_category_list}`}>
          {items.filter(item => item.type==="sauce").map((item, index)=>
              <IngredientItem key={item._id} className={index%2===0?`ml-4 mb-6`:`ml-6 mb-6`} {...item} onClick={()=>{clickItem(item)}}/>
            )}
          </div>
          <p id="main-list" className="text text_type_main-medium mt-10 mb-6">Начинки</p>
          <div className={styles.ingredients_category_list}>
          {items.filter(item => item.type==="main").map((item, index)=>
              <IngredientItem key={item._id} className={index%2===0?`ml-4 mb-6`:`ml-6 mb-6`} {...item} onClick={()=>{clickItem(item)}}/>
            )}
          </div>
        </div>
        <Modal id="modal_item" isOpen={modalItem?true:false} onCloseRequest={() => {setModalItem(null);}} title="Детали ингредиента">
            <IngredientDetails item={modalItem} />
        </Modal>
    </div>
  );
}

export default BurgerIngredients;