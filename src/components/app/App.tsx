import React from 'react';
import AppHeader from '../app-header/AppHeader';

import styles from './App.module.css';
import { AppContext } from '../../services/appContext.js';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import jsData from '../../utils/data.js';
import { useSelector, useDispatch } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { getIngredientsData } from '../../services/actions';



function App(){

  const dispatch = useDispatch();

  React.useEffect(
    ()=> { 
      dispatch(getIngredientsData()); 
    },
    []
  );
  

  return (
      <div className={ styles.App }>
        <AppHeader />
        <main>
          <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
          </DndProvider>          
        </main>
      </div>
  );

}

export default App;
