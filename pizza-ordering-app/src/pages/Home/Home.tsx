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
    console.log(location.coordinates);
    return (
        <main className='main home'>
            {/* <h1 className='home__title'>Delicious pizzas delivered to your doorstep</h1> */}
            <div className='main__grid '>
                {restaurants?.map(restaurant => { 
                    const {longitude, latitude} = restaurant;
                    console.log([longitude, latitude]);
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