import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

interface Props {
    countCartItems: number;
    orderPrice: number;
}

const NavBar: React.FC<Props> = ({countCartItems, orderPrice}: Props) => {
    return (
        <div className='nav'>
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
                   {
                       countCartItems ? (
                           <span>{countCartItems}</span>
                       ) : (
                           '0'
                       )
                   }
                    <FontAwesomeIcon className='fa-cart' icon={faCartArrowDown} />
                   { orderPrice && (
                       <span>{orderPrice.toFixed(2)}kr</span>
                   )}
               </li>
           </nav>
        </div>
    )
}

export default NavBar;
