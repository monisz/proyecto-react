# Proyecto-React (Tienda Beauty)

## Este es mi proyecto en el curso de React.
## Es un e-commerce genérico, pero en este caso está aplicado a productos de belleza.
Se va modificando de acuerdo a los desafíos propuestos en el curso.

## Tecnologías utilizadas
React
HTML
CSS
Se incluyó:
- Bootstrap, utilizado para diferentes estilos de la App.
- Fontawesome, utilizado para los íconos.
- Canva para crear el logo de la tienda.
- Firebase, para crear la base de datos de productos y órdenes de compra.

###
En los primeros commits se utiliza un json propio para cargar los productos.
Más adelante, se cargan desde la API de ML.
En los últimos, ya se utiliza Firebase-Firestore.


###
To run this site you must:

Clone the repository

Install all dependencies npm i

Create a firestore project

Create a src/firebaseConfig.js file with your firebase configuration

export const firebaseConfig = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID.firebaseapp.com>",
    databaseURL: "<https://PROJECT_ID.firebaseio.com>",
    projectId: "<PROJECT_ID>",
    storageBucket: "<PROJECT_ID.appspot.com>",
    messagingSenderId: "<SENDER_ID>",
    appId: "<APP_ID>",
    measurementId: "<G-MEASUREMENT_ID>",
};
Now you can populate your firestore database by running node json-to-firestore.js

And that's it! you can now run a local server with npm start

If you are setting a different port than 3000 in localhost modify the base of index.html <base href = "http://localhost:3000"/>

# Getting Started with Create React App

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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
