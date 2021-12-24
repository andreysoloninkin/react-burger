import React from 'react';
import AppHeader from '../app-header/AppHeader';
import styles from './App.module.css';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';

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
        try{
          const res = await fetch(API_PATH);
          if (res.ok) {
            const json = await res.json();
            setState({...state, ingredients:json.data}); 
          }else{
            console.log('APP_ERROR:',res.statusText);
          }
        }catch (error){
          console.log('APP_ERROR:',error);
        }
      };
      getIngredientsData();
    },
    []
  );

  return (
      <div className={ styles.App }>
        <AppHeader />
        <main>
          <BurgerIngredients {...state} />
          <BurgerConstructor {...state}/>
        </main>
      </div>
  );

}

export default App;
