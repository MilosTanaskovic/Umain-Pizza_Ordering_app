import React from 'react'
import { MenuType } from '../../models/restaurant';
import Cart from '../../components/Cart/Cart';

interface Props {
    menu: MenuType[];
}

const Menu: React.FC<Props> = ({menu}: Props) => {
    console.log(menu);
    return (
        <div>
            {
                menu?.map((item) => (
                    <Cart key={item.id} item={item} />
                ))
            }
        </div>
    )
}
export default Menu;