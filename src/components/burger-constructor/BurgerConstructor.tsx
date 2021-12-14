import React from 'react';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import CurrencyIconCustom from '../CurrencyIconCustom/CurrencyIconCustom';
import './BurgerConstructor.css';

function BurgerConstructor(props) {
  console.log('BurgerConstructor');
  console.log(props);

  return (
    <div className="Burger-constructor ml-10 pt-25 pb-10">

      <div className="constructor-item mb-4 ml-4 mr-4"><span className="drag-space"></span><ConstructorElement type="top" isLocked={true} text="Краторная булка N-200i (верх)" price={200} thumbnail="https://code.s3.yandex.net/react/code/bun-02.png" /></div>

      <div className="constructor-list custom-scroll">
        <div className="constructor-item dragable mb-4 ml-4 mr-2"><span className="drag-space"><DragIcon type="primary" /></span><ConstructorElement text="Говяжий метеорит (отбивная)" price={200} thumbnail="https://code.s3.yandex.net/react/code/meat-04.png" /></div>
        <div className="constructor-item dragable mb-4 ml-4 mr-2"><span className="drag-space"><DragIcon type="primary" /></span><ConstructorElement text="Биокотлета из марсианской Магнолии" price={100} thumbnail="https://code.s3.yandex.net/react/code/meat-01.png" /></div>
        <div className="constructor-item dragable mb-4 ml-4 mr-2"><span className="drag-space"><DragIcon type="primary" /></span><ConstructorElement text="Соус Spicy-X" price={90} thumbnail="https://code.s3.yandex.net/react/code/sauce-02.png" /></div>
        <div className="constructor-item dragable mb-4 ml-4 mr-2"><span className="drag-space"><DragIcon type="primary" /></span><ConstructorElement text="Мясо бессмертных моллюсков Protostomia" price={1337} thumbnail="https://code.s3.yandex.net/react/code/meat-02.png" /></div>
        <div className="constructor-item dragable mb-4 ml-4 mr-2"><span className="drag-space"><DragIcon type="primary" /></span><ConstructorElement text="Соус традиционный галактический" price={15} thumbnail="https://code.s3.yandex.net/react/code/sauce-03.png" /></div>
        <div className="constructor-item dragable mb-4 ml-4 mr-2"><span className="drag-space"><DragIcon type="primary" /></span><ConstructorElement text="Говяжий метеорит (отбивная)" price={200} thumbnail="https://code.s3.yandex.net/react/code/meat-04.png" /></div>
        <div className="constructor-item dragable mb-4 ml-4 mr-2"><span className="drag-space"><DragIcon type="primary" /></span><ConstructorElement text="Биокотлета из марсианской Магнолии" price={100} thumbnail="https://code.s3.yandex.net/react/code/meat-01.png" /></div>
        <div className="constructor-item dragable mb-4 ml-4 mr-2"><span className="drag-space"><DragIcon type="primary" /></span><ConstructorElement text="Соус Spicy-X" price={90} thumbnail="https://code.s3.yandex.net/react/code/sauce-02.png" /></div>
        <div className="constructor-item dragable mb-4 ml-4 mr-2"><span className="drag-space"><DragIcon type="primary" /></span><ConstructorElement text="Мясо бессмертных моллюсков Protostomia" price={1337} thumbnail="https://code.s3.yandex.net/react/code/meat-02.png" /></div>
        <div className="constructor-item dragable ml-4 mr-2"><span className="drag-space"><DragIcon type="primary" /></span><ConstructorElement text="Соус традиционный галактический" price={15} thumbnail="https://code.s3.yandex.net/react/code/sauce-03.png" /></div>
      </div>

      <div className="constructor-item mt-4 ml-4 mr-4"><span className="drag-space"></span><ConstructorElement type="bottom" isLocked={true} text="Флюоресцентная булка R2-D3" price={200} thumbnail="https://code.s3.yandex.net/react/code/bun-01.png" /></div>

      <div className="constructor-total pt-10 pb-10 pr-4">
        <span className="text text_type_digits-medium mr-2">610</span>
        <CurrencyIconCustom size="32" color="#ffffff" className="mr-10"/>
        <Button type="primary" size="large">Оформить заказ</Button>
      </div>
    </div>
  );
}

export default BurgerConstructor;