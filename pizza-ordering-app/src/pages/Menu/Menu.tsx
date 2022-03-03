import React from 'react'
import { MenuType } from '../../models/restaurant';
import Cart from '../../components/Cart/Cart';
import './Menu.css';

interface Props {
    menu: MenuType[];
    addToCart: (menuItem: MenuType) => void;
}

const Menu: React.FC<Props> = ({menu, addToCart}: Props) => {
    return (
        <main className='main'>
            <h1 className='main__title'>Pizza Selection</h1>
            <div className='main__grid'>
            {
                menu?.map((item) => (
                    <Cart 
                        key={item.id} 
                        item={item}
                        addToCart={addToCart}
                    />
                ))
            }
            </div>
        </main>
    )
}
export default Menu;