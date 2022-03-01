import React from 'react'
import './Cart.css';

interface Props {
    restaurant: any;
}

const Restaurant: React.FC<Props> = ({restaurant}: Props)  => {
    const { name, address1, address2 } = restaurant;
    return (
        <div className='card'>
            <h2>{name}</h2>
            <p className='card__address'>{address1}</p>
            <p>{address2}</p>
            <button className='card__button'>View Menu</button>
        </div>
    )
}

export default Restaurant