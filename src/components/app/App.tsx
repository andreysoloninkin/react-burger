import React from 'react';
import AppHeader from '../app-header/AppHeader';
import styles from './App.module.css';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
//import Modal from '../modal/Modal';
import jsData from '../../utils/data.js';

const API_PATH = "https://norma.nomoreparties.space/api/ingredients";

function App(){

  const [state, setState] = React.useState(
    { 
      tab: 'bun',
      ingredients: Array(),
      order: jsData.order
    }
  );
  
  React.useEffect(
    ()=>
    {
      const getIngredientsData = async () => {
        const res = await fetch(API_PATH);
        const data = await res.json();
        console.log(data);
        setState({...state, ingredients:data.data});
      };
      getIngredientsData();
    },
    []
  );



  return (
    <>
      <div className={ styles.App }>
        <AppHeader />
        <main>
          <BurgerIngredients {...state} />
          <BurgerConstructor {...state}/>
        </main>
      </div>
      <div id="react-modals"></div>
    </>
  );

}

export default App;
