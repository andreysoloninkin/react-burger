import React from 'react';
import AppHeader from '../app-header/AppHeader';
import styles from './App.module.css';
import { AppContext } from '../../services/appContext.js';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import jsData from '../../utils/data.js';
import { API_PATH } from '../../utils/api.js';

const ingredientsInitialState = [];

const appInitalState = { 
  tab: "bun",
  ingredients: ingredientsInitialState,
  order: jsData.order,
  total: 0,
  orderid: "0"
};

function changeState(state, action){
  let total = 0;
  const items = state.order;
  if(items.length>0){
    items.filter((item)=>(item.type!=="bun")).forEach(element => {
      total+=element.price;
    });
    total += 2 * items.filter((item)=>(item.type==="bun"))[0].price;
  }

  switch (action.type)
  {
    case "init": 
        return {...state, ingredients:action.data, total: total};
    case "order":
        return {...state, total: total};
    case "orderid":
          return {...state, orderid: action.data.order.number};
    default:
        return {...state};
  }
}

function App(){

  const appState = React.useReducer(changeState, appInitalState)

  const [state, stateDispatch] = appState;

  React.useEffect(
    ()=>
    {
      const getIngredientsData = async () => {
        try{
          const res = await fetch(API_PATH+"ingredients");
          if (res.ok) {
            const json = await res.json();
            stateDispatch({type:"init", data:json.data}); 
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
          <AppContext.Provider value={appState}>
            <BurgerIngredients />
            <BurgerConstructor />
          </AppContext.Provider>
        </main>
      </div>
  );

}

export default App;
