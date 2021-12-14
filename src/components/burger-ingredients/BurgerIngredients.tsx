import React from 'react';
import './BurgerIngredients.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientItem from '../burger-ingredients-item/IngredientItem';



function BurgerIngredients(props) {
  console.log('BurgerIngredients');
  console.log(props);

  const [current, setCurrent] = React.useState('Булки')

  return (
    <div className="Burger-ingredients pt-10 pb-10">
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <div className="ingredients-tab">
          <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>Булки</Tab>
          <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>Соусы</Tab>
          <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>Начинки</Tab>
        </div>
        <div className="ingredients-list custom-scroll">
          <h2 className="ingredients-category-title text text_type_main-medium mt-10 mb-6">Булки</h2>
          <div className="ingredients-category-list">
            <IngredientItem className="ml-4"/>
            <IngredientItem className="ml-6"/>
          </div>
          <p className="text text_type_main-medium mt-10 mb-6">Соусы</p>
          <div className="ingredients-category-list">
            <IngredientItem className="ml-4 mb-6"/>
            <IngredientItem className="ml-6 mb-6"/>
            <IngredientItem className="ml-4 mb-6"/>
            <IngredientItem className="ml-6 mb-6"/>
            <IngredientItem className="ml-4 mb-6"/>
            <IngredientItem className="ml-6 mb-6"/>
            <IngredientItem className="ml-4"/>
            <IngredientItem className="ml-6"/>
          </div>
          <p className="text text_type_main-medium mt-10 mb-6">Начинки</p>
          <div className="ingredients-category-list">
            <IngredientItem className="ml-4 mb-6"/>
            <IngredientItem className="ml-6 mb-6"/>
            <IngredientItem className="ml-4 mb-6"/>
            <IngredientItem className="ml-6 mb-6"/>
            <IngredientItem className="ml-4 mb-6"/>
            <IngredientItem className="ml-6 mb-6"/>
            <IngredientItem className="ml-4"/>
            <IngredientItem className="ml-6"/>
          </div>
        </div>
    </div>
  );
}

export default BurgerIngredients;