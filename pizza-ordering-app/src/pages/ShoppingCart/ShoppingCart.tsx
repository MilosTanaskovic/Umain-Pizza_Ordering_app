import React from 'react'
import { MenuType } from '../../models/restaurant';
import Cart from '../../components/Cart/Cart'
interface Props {
    addToCart: (menuItem: MenuType) => void;
    cartItems: MenuType[];
    removeItem: any;
}

const ShoppingCart: React.FC<Props> = ({addToCart, removeItem, cartItems}: Props) => {
    const orderPrice = cartItems.reduce((acc, currentItem) => acc + currentItem.price * currentItem.qty, 0);
    const deliveryPrice = orderPrice > 100 ? 0 : 20;
    const totalPrice = orderPrice + deliveryPrice;
    return (
        <main className='shopping-cart'>
            <h2>Your Cart</h2>
            <div>{cartItems.length === 0 && <p>Your cart is empty. Add some pizzas 🍕🍕🍕 </p>}</div>
            {
                cartItems && cartItems?.map((cartItem) => {
                    
                    return(
                        <div className='shopping-cart__wrapper'>
                            <div className='shopping-cart__item'>
                                <p>{cartItem.name}</p>
                                <div className="btn-group">
                                    <button onClick={() => addToCart(cartItem)} className='add'>+</button>
                                    <button onClick={() => removeItem(cartItem)} className='remove'>-</button>
                                </div>
                                <p>
                                    {cartItem.qty} x {cartItem.price.toFixed(2)}kr
                                </p>
                            </div>
                            {
                                cartItems.length !== 0 && (
                                    <>
                                    <hr></hr>
                                    <div className='shopping-cart__total'>
                                        <p>Order: {orderPrice.toFixed(2)}kr</p>
                                        <p>Delivery: {deliveryPrice.toFixed(2)}kr</p>
                                        <p>Total: {totalPrice.toFixed(2)}kr</p>
                                        <button>Checkout</button>
                                    </div>
                                    </>
                                )
                            }
                        </div>
                    )
                })
            }
        </main>
    )
}

export default ShoppingCart;
