import React from 'react'
import { MenuType } from '../../models/restaurant';

interface Props {
    addToCart: (menuItem: MenuType) => void;
    cartItems: MenuType[];
    decreaseQty: (menuItem: MenuType) => void;
    setOrderPrice: (orderPrice: number) => void;
    orderPrice: number;
    removeItem: (menuItem: MenuType) => void;
}

const ShoppingCart: React.FC<Props> = ({
    addToCart, 
    decreaseQty, 
    removeItem, 
    cartItems, 
    setOrderPrice, 
    orderPrice 
}: Props) => {

    const orderPriceOrigin: number = cartItems.reduce((acc, currentItem) => acc + currentItem.price * currentItem.qty, 0);
    const deliveryPrice: number = orderPrice > 200 ? 0 : 20;
    const totalPrice = orderPriceOrigin + deliveryPrice
    setOrderPrice(orderPriceOrigin);
    
    return (
        <main className='shopping-cart'>
            <h2>Your Cart</h2>
            <div>{cartItems.length === 0 && <p>Your cart is empty. Add some pizzas 🍕🍕🍕 </p>}</div>
            {
                cartItems.map((cartItem) => ( 
                    <div className='shopping-cart__item'>
                        <p>{cartItem.name}</p>
                        <div className="btn-group">
                            <button onClick={() => addToCart(cartItem)} className='add'>+</button>
                            <button onClick={() => decreaseQty(cartItem)} className='remove'>-</button>
                        </div>
                        <p>
                            {cartItem.qty} x {cartItem.price.toFixed(2)}kr
                        </p>
                        <button onClick={() => removeItem(cartItem)} className='remove-all'>x</button>
                    </div>               
                ))
            }
            {
                cartItems.length !== 0 && (
                    <>
                    <hr></hr>
                    <div className='shopping-cart__total'>
                        <p>Order: {orderPrice.toFixed(2)}kr</p>
                        <p>Delivery(free over 200kr.): {deliveryPrice.toFixed(2)}kr</p>
                        <p>Total: {totalPrice.toFixed(2)}kr</p>
                        <button>Checkout</button>
                    </div>
                    </>
                )
            }
        </main>
    )
}

export default ShoppingCart;
