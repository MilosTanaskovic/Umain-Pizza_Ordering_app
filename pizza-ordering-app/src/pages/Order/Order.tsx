import React from 'react';
import { MenuType } from '../../models/restaurant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './Order.css';
import '../main.css';
import '../../components/Buttons/Button.css';
import Button from '../../components/Buttons/Button';
import { useHistory } from 'react-router';

interface Props {
    cartItems: MenuType[];
    removeItem: (menuItem: MenuType) => void;
}

const Order: React.FC<Props> = ({cartItems, removeItem}) => {
    let history = useHistory();
    return (
        <main className='main order'>
            <h1 className='main__title'>Your Order List</h1>
            <div>{cartItems.length === 0 && <p>Your order list is empty. Add some pizzas 🍕🍕🍕 </p>}</div>
            <div className='checkout-box'>
            {
                cartItems.map((orderItem) => { 
                    const {name, price, qty} = orderItem;
                    return (
                        <div className='checkout-box__item order__item'>
                            <div className='checkout-box__grid'>
                                <div className='checkout-box__row'>
                                    <div className='checkout-box__row-img checkout-box__row-column'>
                                        <img src={`/assets/menu/${orderItem.id}.jpeg`} alt={orderItem.name} />
                                    </div>
                                    <div className='checkout-box__row-state checkout-box__row-column'>
                                        <p className='checkout-box__row-font'>{name}</p>
                                        <p className='checkout-box__row-font'>{(price * qty).toFixed(2)}kr</p>
                                        <p className='order__item-qty'>
                                            <FontAwesomeIcon onClick={() => removeItem(orderItem)} className='fa-trash' icon={faTrash} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )               
                })
            }
            {
                cartItems.length !== 0 
                    ?   <Button className='button button-order' >
                            <span className='btn-dark'>Go to Payment</span>
                        </Button>
                    :   <Button className='button-order' onClick={() =>  history.push('/menu')} >
                            <span className='btn-dark btn-back'>Back to Menu</span>
                        </Button>
            }
            </div>
        </main>
    )
}

export default Order;
