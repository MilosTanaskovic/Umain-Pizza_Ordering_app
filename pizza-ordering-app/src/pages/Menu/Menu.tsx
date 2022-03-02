import React from 'react'
import { MenuType } from '../../models/restaurant';
import Cart from '../../components/Cart/Cart';

interface Props {
    menu: MenuType[];
    addToCart: (menuItem: MenuType) => void;
}

const Menu: React.FC<Props> = ({menu, addToCart}: Props) => {
    return (
        <div>
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
    )
}
export default Menu;