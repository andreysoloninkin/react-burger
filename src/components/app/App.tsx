import React from 'react';
import AppHeader from '../app-header/AppHeader';
import styles from './App.module.css';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import jsData from '../../utils/data.js';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      tab: 'bun',
      ingredients: Array(),
      order: Array()
    }
    //this.componentDidMount = this.componentDidMount.bind(this);  
  }

  componentDidMount() {
    //console.log(jsData);
    //console.log(this.state);
    this.setState({ingredients:jsData.ingredients, order:jsData.order});   
  }

  render(){
    //console.log("*********this.state********");
    //console.log(this.state);

    return(
      <div className={ styles.App }>
        <AppHeader />
        <main>
          <BurgerIngredients {...this.state} />
          <BurgerConstructor {...this.state}/>
        </main>
      </div>
    )
  }
}

export default App;
