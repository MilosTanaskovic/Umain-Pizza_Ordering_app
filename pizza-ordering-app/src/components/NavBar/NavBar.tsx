import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import Logo from '../Logo/Logo';

interface Props {
    countCartItems: number;
    orderPrice: number;
}

const NavBar: React.FC<Props> = ({countCartItems, orderPrice}: Props) => {
    return (
        <header className='nav'>
            <Logo />
           <nav className='nav__wrapper'>
               <li>
                    <Link to='/'>Home</Link>
               </li>
               <li>
                    <Link to='/cart'>Checkout</Link>
               </li>
               <li>
                    <Link to='/order'>Order</Link>
                    
               </li>
               <li>
                   <div className='nav__wrapper-cart'>
                    {
                        countCartItems ? (
                                <span  className='nav__wrapper-qty'>{countCartItems}</span>
                        ) : (
                                <span className='nav__wrapper-qty'>0</span>
                        )
                    }
                        <FontAwesomeIcon className='fa-cart' icon={faCartArrowDown} />
                    </div>
                   { orderPrice ? (
                       <span className='nav__wrapper-price'>{orderPrice.toFixed(2)}kr</span>
                   ): (
                       <span className='nav__wrapper-price'>0kr</span>
                   )}
               </li>
           </nav>
        </header>
    )
}

export default NavBar;
