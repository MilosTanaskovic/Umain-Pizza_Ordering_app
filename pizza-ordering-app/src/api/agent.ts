import axios, { AxiosResponse } from 'axios';
import { RestaurantType } from '../models/restaurant';

// base url
axios.defaults.baseURL = 'https://private-anon-3297cfaf2d-pizzaapp.apiary-mock.com';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
};

const Restaurants = {
    list: () => requests.get<RestaurantType[]>('/restaurants/'),
    menu: () => requests.get('/restaurants/restaurantId/menu?category=Pizza&orderBy=rank'),
};

const agent = {
    Restaurants,
};

export default agent;