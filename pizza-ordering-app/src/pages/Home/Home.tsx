import React from 'react';
import Restaurant from '../../components/Restaurant/Restaurant';
import { RestaurantType } from '../../models/restaurant';

interface Props {
    restaurants: RestaurantType[];
}

const Home: React.FC<Props> = ({restaurants}: Props) => {
    return (
        <main>
            <h1>Pizza Ordering App</h1>
            {restaurants?.map(restaurant => (
                <Restaurant 
                    key={restaurant.id}
                    restaurant={restaurant}
                />
            ))}
        </main>
    )
}

export default Home;