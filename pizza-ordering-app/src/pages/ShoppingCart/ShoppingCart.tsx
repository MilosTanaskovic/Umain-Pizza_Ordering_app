import React from 'react'
import { Link } from 'react-router-dom';
import { MenuType } from '../../models/restaurant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

import './ShoppingCart.css';
import '../main.css';

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
        <main className='main shopping-cart'>
            <h1 className='main__title'>Your Cart</h1>
            <div>{cartItems.length === 0 && <p>Your cart is empty. Add some pizzas 🍕🍕🍕 </p>}</div>
            <div className='checkout-box'>
            {
                cartItems.map((cartItem) => ( 
                    <div className='checkout-box__item shopping-cart__item'>
                        <div className='checkout-box__grid'>
                            <div className='checkout-box__row'>
                                <div className='checkout-box__row-img checkout-box__row-column'>
                                    <img src={`/assets/menu/${cartItem.name}.jpeg`} alt={cartItem.name} />
                                </div>
                                <div className='checkout-box__row-state checkout-box__row-column'>
                                    <p className='checkout-box__row-font'>{cartItem.name}</p>
                                    <p className='checkout-box__row-font'>{cartItem.price.toFixed(2)}kr</p>
                                    <p className='shopping-cart__item-qty'>
                                        <FontAwesomeIcon onClick={() => decreaseQty(cartItem)} className='fa-minus' icon={faCircleMinus} />
                                        <span>Quantity: {cartItem.qty}</span>
                                        <FontAwesomeIcon onClick={() => addToCart(cartItem)} className='fa-plus' icon={faCirclePlus} />
                                        <FontAwesomeIcon onClick={() => removeItem(cartItem)} className='fa-trash' icon={faTrash} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>               
                ))
            }
            </div>
            {
                cartItems.length !== 0 && (
                    <>
                    <hr></hr>
                    <div className='shopping-cart__total'>
                        <p>Order: {orderPrice.toFixed(2)}kr</p>
                        <p>Delivery(free over 200kr.): {deliveryPrice.toFixed(2)}kr</p>
                        <p>Total: {totalPrice.toFixed(2)}kr</p>
                        <Link to='/order'>Checkout</Link>
                    </div>
                    </>
                )
            }
        </main>
    )
}

export default ShoppingCart;
