import React from 'react';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import logoimg from '../../images/logo.png';
import './AppHeader.module.css';

function AppHeader(){
  return (
      <header>
        <nav className="pt-4 pb-4">
          <div>
            <ul>
              <li className="mr-2"><BurgerIcon type="primary" /><span className="text text_type_main-default ml-2">Конструктор</span></li>
              <li><ListIcon type="primary" /><span className="text text_type_main-default ml-2">Лента заказов</span></li>
            </ul>
          </div>
          <div>
            <Logo />
          </div>
          <div>
            <ul>
              <li><ProfileIcon type="primary" /><span className="text text_type_main-default ml-2">Личный кабинет</span></li>
            </ul>
          </div>
        </nav>
      </header>
  );
}

export default AppHeader;