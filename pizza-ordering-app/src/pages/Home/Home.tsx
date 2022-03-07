import React from 'react';
import Cart from '../../components/Cart/Cart';
import GeoLocation from '../../components/GeoLocation/GeoLocation';
import useGeoLocation from '../../hooks/useGeoLocation';
import { RestaurantType } from '../../models/restaurant';
import './Home.css';
import '../main.css';

interface Props {
    restaurants: RestaurantType[];
    addToCart?: any;
}

const Home: React.FC<Props> = ({restaurants, addToCart}) => {
    const location = useGeoLocation();
    return (
        <main className='main home'>
            <div className='main__grid '>
                {restaurants?.map(restaurant => { 
                    return (
                        <Cart 
                            key={restaurant.id}
                            restaurant={restaurant}
                            addToCart={addToCart}
                            location={location}
                        />
                    )
                })}
            </div>
            <GeoLocation location={location} />
        </main>
    )
}

export default Home;