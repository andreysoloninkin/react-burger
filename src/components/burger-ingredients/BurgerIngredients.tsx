import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styles from './BurgerIngredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientItem from '../burger-ingredients-item/IngredientItem';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import Modal from '../modal/Modal';


function BurgerIngredients(props) {
  //console.log('BurgerIngredients');
  //console.log(props.ingredients);
  const [modalItem, setModalItem] = React.useState(null);
  //const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [current, setCurrent] = React.useState(props.tab);
  
  function clickTab(e){
    //alert("!");
    //console.log(e);    
    setCurrent(e);
    document.getElementById(e+"-list")?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  function clickItem(el){
    console.log(el);
    setModalItem(el);
  }
/*
  function showModal(el)
  {
    //const modalRoot = document.getElementById("modal-root")!;
    console.log("SHOW", el);
    //setIsModalOpen(true);

  }

  function hideItem(el){
    console.log("HIDE", el);
    //setIsModalOpen(false);
  }

  React.useEffect(()=>{
    if(modalItem)
    {
      showModal(modalItem)
    }
    else
    {
      hideItem(modalItem);
    }
  },[modalItem])
*/

  const items = props.ingredients;


  
  //const modalRoot = document.getElementById("react-modals")!;
/*
  function openModal() {
    //setIsModalOpen(true);
  }  
*/

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
        <Modal isOpen={modalItem?true:false} onCloseRequest={() => {setModalItem(null);}} title="Детали ингредиента">
            <IngredientDetails item={modalItem} close={() => {setModalItem(null); }}/>
        </Modal>
    </div>
  );
}


BurgerIngredients.propTypes =  { 
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


export default BurgerIngredients;