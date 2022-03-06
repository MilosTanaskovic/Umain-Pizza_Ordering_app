# React Pizza Store 🍕 🍕 🍕

A simple front-end pizza store built using React, TypeScript and Css3. I did this project as assigment for Umain company. [View Umain Site](https://www.umain.com/).

## Features ✨

* In this project is implemented: TypeScript, React Router, Axios, React Fontawesome, Css3, clsx.   

* **Home page** - fetching a list of restaurants with adress and position from external API(https://pizzaapp.docs.apiary.io/) using axios , and implement custom GeoLocation Hook to get latitude and longitude from current user location. Create cart component for multiple pages(Home, Menu) and styling it using pure css3(flex, grid). Create Button component for custom button. Mobile first approuch for all components. For page routing used React Router.
* **Menu page** - fetching food menu for a given restaurant, see all ingredient.
* **Shopping cart** - ability to see, edit and delete your order.
* **Checkout page** - ability to see, delete your order before your purchase.
* **Payment page** - 

## Features to add/improve 🔮

* Data are not currently persists to local storage. It really should be hooked up to an external database like Firebase.
* Login via Auth0 and create customer accounts.
* Collect payment token via Stripe elements (right now it just displays UI and doesn't have any functionality).
* Option to order a customised pizza.
* Filter pizzas for dietary requirements: vegan, vegetarian, dairy-free etc.

## Get up and running  🚀

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
