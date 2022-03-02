import React from 'react'
import { useHistory } from 'react-router';
import { MenuType, RestaurantType } from '../../models/restaurant';
import './Cart.css';

interface Props {
    restaurant?: RestaurantType | any;
    item?: MenuType[] | any; 
}

const Restaurant: React.FC<Props> = ({restaurant, item}: Props)  => {
    let history = useHistory();

    const handleViewMenu = () => {
        history.push('/menu');
    }

    return (
        <div className='card'>
            {
                restaurant && (
                    <>
                        <h2>{restaurant.name}</h2>
                        <p className='card__address'>{restaurant.address1}</p>
                        <p>{restaurant.address2}</p>
                        <button className='card__button' onClick={handleViewMenu}>View Menu</button>
                    </>
                )
            }
            {
                item && (
                    <>
                        <h2>{item.name}</h2>
                        <p className='card__address'>{item.price}kr</p>
                        <p>{item.category}</p>
                        <span>{item.rank}</span>
                        <ul>
                            {item?.topping?.map((ingredient: string) => (
                                    <li>{ingredient}</li>      
                            ))}
                        </ul>
                        <button className='card__button'>Add to order</button>
                    </>
                )
            }
            

        </div>
    )
}

export default Restaurant