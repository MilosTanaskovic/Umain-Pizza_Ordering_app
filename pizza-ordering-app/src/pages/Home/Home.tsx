import React from 'react';
import Cart from '../../components/Cart/Cart';
import { RestaurantType } from '../../models/restaurant';

interface Props {
    restaurants: RestaurantType[];
}

const Home: React.FC<Props> = ({restaurants}: Props) => {
    return (
        <main>
            <h1>Pizza Ordering App</h1>
            {restaurants?.map(restaurant => (
                <Cart 
                    key={restaurant.id}
                    restaurant={restaurant}
                />
            ))}
        </main>
    )
}

export default Home;