# Star Wars Character List

This is a web application that allows you to view a list of characters from the Star Wars universe, obtained from the [Star Wars API (SWAPI)](https://swapi.py4e.com/). You can also search and filter the characters by various attributes such as name, height, mass, hair color, skin color, and eye color.

## Getting Started

To run the application, you will need [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager) installed on your computer. Once you have those installed, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project in your terminal or command prompt.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.
5. Open a web browser and go to `http://localhost:3000` to view the application.

## Features

The main features of the application are:

### Character List

The character list shows a paginated table with the following columns:

- Name
- Height
- Mass
- Hair Color
- Skin Color
- Eye Color

Each row in the table represents a character from the Star Wars universe. You can click on a character's name to view more details about that character.

### Search

You can search for characters by name using the search box at the top of the page. The search is case-insensitive and will filter the list in real-time as you type.

### Filtering

You can filter the list of characters by height using the height filter input field. Only characters whose height is greater than or equal to the value entered in the field will be shown in the list. The filter is applied in real-time as you type.

### Avatar

Each character row displays a small image/avatar of the character. The image is loaded from the following endpoint: `https://starwars-visualguide.com/assets/img/characters/{id}.jpg`, where `{id}` is the character's ID.

## Credits

This project was developed by muffy as a coding exercise from Brackets . The Star Wars API (SWAPI) was used to obtain the character data, and the character avatars were loaded from the [Star Wars API Images](https://starwars-visualguide.com/) endpoint. The UI was designed using [Tailwind CSS](https://tailwindcss.com/).

<!--
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
# starWar2 -->
