import React from 'react';
import { MenuType } from '../../models/restaurant';

interface Props {
    cartItems: MenuType[];
    removeItem: (menuItem: MenuType) => void;
}

const Order: React.FC<Props> = ({cartItems, removeItem}: Props) => {
    return (
        <main className='main order'>
            <h2>Checkout</h2>
            <div>{cartItems.length === 0 && <p>Your order list is empty. Add some pizzas 🍕🍕🍕 </p>}</div>
            {
                cartItems.map((orderItem) => { 
                    const {name, price, qty} = orderItem;
                    return (
                        <div className='shopping-cart__item'>
                            <img src='' alt='' />
                            <span>{qty}</span>
                            <h3>{name}</h3>
                            <span>{price * qty}kr</span>
                            <button onClick={() => removeItem(orderItem)} className='remove-all'>x</button>
                        </div>
                    )               
                })
            }
            <button>Go to Payment</button>
        </main>
    )
}

export default Order;
