import React from 'react'
import { useHistory } from 'react-router';
import { MenuType, RestaurantType } from '../../models/restaurant';
import Button from '../Buttons/Button';
import './Cart.css';

interface Props {
    restaurant?: RestaurantType | any;
    item?: MenuType;
    addToCart: (menuItem: MenuType) => void;
    loaded?: boolean;
}

const Restaurant: React.FC<Props> = ({restaurant, item, addToCart, loaded})  => {
    let history = useHistory();
    console.log(restaurant)
    return (
        <div className='card'>
            {
                restaurant && (
                    <>
                        <img className='card__img' src={`/assets/restaurants/${restaurant.id}.jpeg`} alt={restaurant.name} />
                        <h1>{restaurant.name}</h1>
                        <p className='card__address'>{restaurant.address1}</p>
                        <p>{restaurant.address2}</p>
                        {loaded && (
                            <p>The restaurant is <b>{`${(restaurant.distance).toFixed(2)} km `}</b>from you</p>
                        )}
                        <Button onClick={() => history.push('/menu')}>View Menu</Button>
                     </>   
                )  
            }
            {
                item && (
                    <>
                        <div className='card__box'>
                            <img className='card__img' src={`/assets/menu/${item.id}.jpeg`} alt={item.name} />
                            <p className='card__box-category'>{item.category}</p>
                            <span className='card__box-rank'>{item.rank}</span>
                        </div>
                        <h2>{item.name}</h2>
                        <p className='card__address'>{item.price}kr</p>
                        <ul className='card__ingredient'>
                            {item?.topping?.map((ingredient: string) => (
                                <li>{ingredient}</li>      
                            ))}
                        </ul>
                        <Button onClick={() => addToCart(item)}>Add to order</Button>
                    </>
                )
            }
        </div>
    )
}

export default Restaurant