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

    // get distance
    const {coordinates, loaded} = location;

    // calculate the distance between the user and each restaurant using the Haversine formula.
    const getDistance = (myLat: number, myLng: number, restaurantLat: number, restaurantLng: number) => {

        let deltaLat = deg2rad(restaurantLat-myLat);
        let deltaLng = deg2rad(restaurantLng-myLng); 
        let a = (Math.sin(deltaLat/2) * Math.sin(deltaLat/2) + Math.cos(deg2rad(myLat)) * Math.cos(deg2rad(restaurantLat)) *  Math.sin(deltaLng/2) * Math.sin(deltaLng/2));

        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        // If you want calculate the distance in miles instead of kilometers, replace 6371 with 3959.
        let distance = 6371 * c;
        
        return distance;
    }
    const deg2rad = (deg: number) => {
        return deg * (Math.PI/180)
    }

    restaurants.map((element) => {
        return element["distance"] = getDistance(coordinates.lat, coordinates.lng, element.latitude, element.longitude);
    });
    
    return (
        <main className='main home'>
            <div className='main__grid '>
                {restaurants?.sort((a:RestaurantType, b:RestaurantType) => {
                    return a.distance - b.distance;
                }).map(restaurant => (       
                    <Cart 
                        key={restaurant.id}
                        restaurant={restaurant}
                        addToCart={addToCart}
                        loaded={loaded}
                    />                  
                ))}
            </div>
            <GeoLocation location={location} />
        </main>
    )
}

export default Home;