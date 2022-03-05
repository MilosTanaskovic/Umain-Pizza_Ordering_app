import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { MenuType } from '../../models/restaurant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

import './ShoppingCart.css';
import '../main.css';
import '../../components/Button/Button.css';
import clsx from 'clsx';
import Button from '../../components/Button/Button';

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
}) => {

    const orderPriceOrigin: number = cartItems.reduce((acc, currentItem) => acc + currentItem.price * currentItem.qty, 0);
    const deliveryPrice: number = orderPrice > 200 ? 0 : 20;
    const totalPrice = orderPriceOrigin + deliveryPrice
    setOrderPrice(orderPriceOrigin);

    let history = useHistory();
    
    return (
        <main className='main shopping-cart'>
            <h1 className='main__title'>Your Cart</h1>
            <div>{cartItems.length === 0 && <p>Your cart is empty. Add some pizzas 🍕🍕🍕 </p>}</div>
            <Button className='button-shoppcart' onClick={() => history.push('/menu')}>Back to Menu</Button>
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
            {/* Total Price */}
            {
                cartItems.length !== 0 && (
                    <div className='shopping-cart__total'>
                        <p>Order: <strong>{orderPrice.toFixed(2)}kr</strong></p>
                        <p>Delivery(free over 200kr.): <strong>{deliveryPrice.toFixed(2)}kr</strong></p>
                        <p>Total: <strong>{totalPrice.toFixed(2)}kr</strong></p>
                        <Link className={clsx('button', 'button-total')} to='/order'>Checkout</Link>
                    </div>
                )
            }
            </div>
        </main>
    )
}

export default ShoppingCart;
