# Pizza Ordering App 🍕 🍕 🍕

A simple front-end pizza store built using React, TypeScript and Css3. I did this project as assigment for Umain company. [View Umain Site](https://www.umain.com/).
Try the [demo]()

<a href="https://ibb.co/9ZJd17h"><img src="https://i.ibb.co/41c0XH2/Screenshot-2022-03-07-at-11-53-07.png" alt="Screenshot-2022-03-07-at-11-53-07" border="0" /></a>

## Features ✨

* In this project is implemented: TypeScript, React Router, Axios, React Fontawesome, Css3, clsx.   

* **Home page** - fetching a list of restaurants with adress and position from external API(https://pizzaapp.docs.apiary.io/) using axios , and implement custom GeoLocation Hook to get latitude and longitude from current user location. Create cart component for multiple pages(Home, Menu) and styling it using pure css3(flex, grid). Create Button component for custom button. Mobile first approuch for all components. For page routing used React Router.
* **Menu page** - fetching food menu for a given restaurant, see all ingredient. 
* **Shopping cart** - ability to see, edit and delete your order. Go back to the Menu Page and continue browsing;
* **Checkout page** - ability to see, delete your order before your purchase. Go back to the Menu Page and continue browsing;
* **Payment page** - 

## Features to add/improve 🔮

* Data are not currently persists to any storage. It really should be hooked up to an external database like Firebase.
* Login via Auth0 and create customer accounts.
* Collect payment token via Stripe elements (right now it just displays UI and doesn't have any functionality).
* Option to order a customised pizza.
* Filter pizzas for dietary requirements: vegan, vegetarian, dairy-free etc.

## Get up and running  🚀

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

In the project directory, you can run:

- Node.js
- NPM
```javascript
/* First, Install the needed packages */
npm install

/* Then start both Node and React */
npm start
```
<br />

## Source folder structure

```
public ->
    assets ->
                    - menu
                    - restaurants
src ->
    api -> 
                    - agent.ts
    components -> 
                    - Buttons
                    - Cart
                    - GeoLocation
                    - Logo
                    - NavBar
    pages -> 
                    - Home
                    - Menu
                    - ShoppingCart
                    - Order
                    - Payment
    hooks ->    
                    - useGeoLocation
    models ->
                    - geoLocation.ts
                    - restaurant.ts
    App
    index.js
```