import React from 'react'
import { MenuType } from '../../models/restaurant';
import Cart from '../../components/Cart/Cart'
interface Props {
    addToCart: (menuItem: MenuType) => void;
    cartItems: MenuType[];
    removeItem: any;
}

const ShoppingCart: React.FC<Props> = ({addToCart, removeItem, cartItems}: Props) => {
    console.log(cartItems);
    return (
        <main className='shopping-cart'>
            <h2>Your Cart</h2>
            <div>{cartItems.length === 0 && <p>Your cart is empty. Add some pizzas 🍕🍕🍕 </p>}</div>
            {
                cartItems && cartItems?.map((cartItem) => {
                    
                    return(
                        <div className='shopping-cart__item'>
                            <p>{cartItem.name}</p>
                            <div className="btn-group">
                                <button onClick={() => addToCart(cartItem)} className='add'>+</button>
                                <button onClick={() => removeItem(cartItem)} className='remove'>-</button>
                            </div>
                            <p>
                                {cartItem.qty} x SEK{cartItem.price.toFixed(2)}
                            </p>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default ShoppingCart;
