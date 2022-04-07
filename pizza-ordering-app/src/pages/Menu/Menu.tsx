import React, {useState, useEffect} from 'react'
import { MenuType } from '../../models/restaurant';
import Cart from '../../components/Cart/Cart';
import './Menu.css';
import '../main.css';

interface Props {
    menu: MenuType[];
    addToCart: (menuItem: MenuType) => void;
}

const Menu: React.FC<Props> = ({menu, addToCart}) => {
    console.log(menu)
    return (
        <main className='main'>
            <h1 className='main__title'>Menu Selection</h1>
            <div className='main__grid'>
            {menu?.sort((a:MenuType, b: MenuType) => {
                return a.rank - b.rank;
            }).map((item) => (
                <Cart 
                    key={item.id} 
                    item={item}
                    addToCart={addToCart}
                />
            ))}
            </div>
        </main>
    )
}
export default Menu;