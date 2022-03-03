import React from 'react';
import Cart from '../../components/Cart/Cart';
import GeoLocation from '../../components/GeoLocation/GeoLocation';
import useGeoLocation from '../../hooks/useGeoLocation';
import { RestaurantType } from '../../models/restaurant';

interface Props {
    restaurants: RestaurantType[];
    addToCart?: any;
}

const Home: React.FC<Props> = ({restaurants, addToCart}: Props) => {
    const location = useGeoLocation();
    console.log(location.coordinates);
    return (
        <main className='main'>
            <h1>Pizza Ordering App</h1>
            {restaurants?.map(restaurant => (
                <Cart 
                    key={restaurant.id}
                    restaurant={restaurant}
                    addToCart={addToCart}
                />
            ))}
            <GeoLocation location={location} />
        </main>
    )
}

export default Home;