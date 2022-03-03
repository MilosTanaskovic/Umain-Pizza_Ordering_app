import React from 'react'
import { useHistory } from 'react-router';
import { MenuType, RestaurantType } from '../../models/restaurant';
import './Cart.css';

interface Props {
    restaurant?: RestaurantType;
    item?: MenuType;
    addToCart: (menuItem: MenuType) => void;
}

const Restaurant: React.FC<Props> = ({restaurant, item, addToCart}: Props)  => {
    let history = useHistory();

    const handleViewMenu = () => {
        history.push('/menu');
    }
    console.log(restaurant);
    return (
        <div className='card'>
            {
                restaurant && (
                    <>
                        <img className='card__img' src={`/assets/restaurant/${restaurant.id}.jpeg`} alt={restaurant.name} />
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
                        <button className='card__button' onClick={() => addToCart(item)}>Add to order</button>
                    </>
                )
            }
        </div>
    )
}

export default Restaurant