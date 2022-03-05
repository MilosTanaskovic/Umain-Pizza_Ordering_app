import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import '../../components/Button/Button.css'
import clsx from 'clsx';
import Logo from '../Logo/Logo';
import { MenuType } from '../../models/restaurant';

interface Props {
    cartItems: MenuType[];
    orderPrice: number;
}

const NavBar: React.FC<Props> = ({ orderPrice, cartItems}: Props) => {
    const cartCounter = cartItems.map(item => item.qty).reduce((acc, item) => item + acc, 0);
    return (
        <header className='nav'>
            <Logo />
           <nav className='nav__wrapper'>
               {/* <li>
                    <Link to='/'>Home</Link>
               </li>
               <li>
                    <Link to='/cart'>Checkout</Link>
               </li> */}
                
                <li>
                {
                    cartCounter !== 0 && (  
                    <Link className={clsx('button', 'button-checkout')} to='/cart'>Your Cart</Link>
                    )
                }
                </li>
                  
               <li>
                   <div className='nav__wrapper-cart'>
                    {
                        cartCounter !== 0 ? (
                                <span  className='nav__wrapper-qty'>{cartCounter}</span>
                        ) : (
                                <span className='nav__wrapper-qty'>0</span>
                        )
                    }
                        <FontAwesomeIcon className='fa-cart' icon={faCartArrowDown} />
                    </div>
                   {
                        orderPrice ? (
                            <span className='nav__wrapper-price'>{orderPrice?.toFixed(2)}kr</span>
                        ): (
                            <span className='nav__wrapper-price'>0kr</span>
                        )
                    }
               </li>
           </nav>
        </header>
    )
}

export default NavBar;
