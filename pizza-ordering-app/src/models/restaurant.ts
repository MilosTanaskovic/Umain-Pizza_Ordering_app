export interface RestaurantType {
    id: number;
    name: string;
    address1: string;
    address2: string;
    latitude: number;
    longitude: number;
}

export interface MenuType {
    id: number;
    category: string;
    name: string;
    topping: string[];
    price: number;
    rank: number;
}
