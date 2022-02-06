import React from 'react';
import styles from './BurgerIngredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import { AppContext } from '../../services/appContext.js';
import IngredientItem from '../burger-ingredients-item/IngredientItem';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import Modal from '../modal/Modal';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { SET_TAB, OPEN_MODAL, CLOSE_MODAL } from '../../services/actions';

function BurgerIngredients() {
  const dispatch = useDispatch();
  const current = useSelector( (state:RootStateOrAny) => state.tab);
  const modalItem = useSelector( (state:RootStateOrAny) => state.modal);
  ///*
  //const [state, changeState] = React.useContext(AppContext);
  //const [modalItem, setModalItem] = React.useState(null);
  //const [current, setCurrent] = React.useState(state.tab);//props.tab
  
  function clickTab(e){
    //setCurrent(e);
    dispatch({type:SET_TAB, tab: e});
    document.getElementById(e+"-list")?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  function clickItem(el){
    //setModalItem(el);
    dispatch({type:OPEN_MODAL, item: el});
  }

  function scrollIngredientsList(){
    let pos = document.getElementById("ingredients-list")?.scrollTop;
    let ar = ["bun", "sauce", "main"];
    let res = "";
    let resdy = 1000000;
    let dy = 0;
    ar.forEach(item => {
      // @ts-ignore:
      dy = Math.abs(document.getElementById(item+"-list")?.offsetTop - document.getElementById("ingredients-list")?.offsetTop - pos);
      if(dy<resdy) {res = item; resdy = dy}
    });
    if( res!=current )  dispatch({type:SET_TAB, tab: res}); //setCurrent(res);
    //alert(res);
    // @ts-ignore:
    //document.getElementById("ingredients-list").scrollTop = document.getElementById("ingredients-list").scrollTop + 10;
  }

  const items = useSelector((state:RootStateOrAny) => state.ingredients); //state.ingredients;

  return (
    <div className={`${styles.Burger_ingredients} pt-10 pb-10`}>
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <div className={styles.ingredients_tab}>
          <Tab value="bun" active={current === 'bun'} onClick={clickTab}>Булки</Tab>
          <Tab value="sauce" active={current === 'sauce'} onClick={clickTab}>Соусы</Tab>
          <Tab value="main" active={current === 'main'} onClick={clickTab}>Начинки</Tab>
        </div>
        <div className={`${styles.ingredients_list} custom-scroll`} id="ingredients-list" onScroll={scrollIngredientsList}>
          <p id="bun-list" className={`${styles.ingredients_category_title} text text_type_main-medium mt-10 mb-6`}>Булки</p>
          <div className={`${styles.ingredients_category_list}`}>
              {items.filter(item => item.type==="bun").map((item, index)=>
                <IngredientItem key={item._id} className={index%2===0?`ml-4 mb-6`:`ml-6 mb-6`} item={{...item}} onClick={()=>{clickItem(item)}}/>
              )}
          </div>
          <p id="sauce-list" className="text text_type_main-medium mt-10 mb-6">Соусы</p>
          <div className={`${styles.ingredients_category_list}`}>
          {items.filter(item => item.type==="sauce").map((item, index)=>
              <IngredientItem key={item._id} className={index%2===0?`ml-4 mb-6`:`ml-6 mb-6`} item={{...item}} onClick={()=>{clickItem(item)}}/>
            )}
          </div>
          <p id="main-list" className="text text_type_main-medium mt-10 mb-6">Начинки</p>
          <div className={styles.ingredients_category_list}>
          {items.filter(item => item.type==="main").map((item, index)=>
              <IngredientItem key={item._id} className={index%2===0?`ml-4 mb-6`:`ml-6 mb-6`} item={{...item}} onClick={()=>{clickItem(item)}}/>
            )}
          </div>
        </div>
        {modalItem && (<Modal id="modal_item" isOpen={modalItem?true:false} onCloseRequest={() => {dispatch({type:CLOSE_MODAL});/*setModalItem(null);*/}} title="Детали ингредиента">
            <IngredientDetails item={modalItem} />
        </Modal>)}
    </div>
  );
}

export default BurgerIngredients;