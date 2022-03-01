import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar: React.FC = () => {
    return (
        <div className='nav'>
           <nav className='nav__wrapper'>
               <li>
                    <Link to='/'>Home</Link>
               </li>
               <li>
                    <Link to='/checkout'>Checkout</Link>
               </li>
               <li>
                    <Link to='/order'>Order</Link>
               </li>
           </nav>
        </div>
    )
}

export default NavBar;
