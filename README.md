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


# Mapping App with OSM using React

This project is a Create-React-App (CRA) based mapping application that utilizes OpenStreetMap (OSM) to display a map interface. The app includes various features like turfjs for geospatial analysis, Ant.Design for UI components, and Redux for state management. Users can interact with the map, load specific regions, and view region-specific information. The application also has a night mode feature that can be toggled using the sidebar.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

### `git clone <repository-url>`
### `cd mapping-app-with-osm`


2. Install dependencies:

### `npm install`


3. Start the development server:
### `npm start`


The app will be running at `http://localhost:3000` in your browser.

## Features

### Header-Sidebar-Footer Layout

The app follows a header-sidebar-footer layout:

- Header: Includes a dummy login/logout button and a profile button (Not implemented, just placeholders).
- Collapsible Sidebar: Contains an icon with a text label. The sidebar is used to trigger the night mode toggle (Bonus feature) and to display the region selection form.
- Footer: A simple text footer.

### Map Interface

The main content area displays a map with 100% height and width using OpenStreetMap.

### Floating Controls

The floating controls consist of two components:

#### Form Input: Region Selection

The user can select one of the three regions: United States, India, or United Kingdom using a dropdown select input. This component is responsible for dispatching the appropriate action to load the selected region.

#### Form Submit: Load Button

The load button triggers the action to load the selected region on the map when clicked.

#### Region Info Card

When a region is selected, the Region Info Card component displays region-specific information such as currency symbol, speed units (kmph or mph), distance units (kilometers or miles), volume units (liters or gallons), and timezone(s) information.

### Redux State Management

Redux is used for state management to store the selected region and the region information. The selected region is used to load the corresponding data on the map, and the region information is displayed in the Region Info Card.

### Bonus: Night Mode Toggle

The app includes a night mode feature that can be toggled using the sidebar switch. The night mode changes the color scheme of the app to provide a dark theme.

## Testing the App

1. Launch the application by following the "Getting Started" steps.
2. Upon opening the app, you will see the map interface and the sidebar.
3. Use the region selection dropdown to choose one of the regions (United States, India, or United Kingdom).
4. Click the "Load" button to load the selected region on the map.
5. The Region Info Card will display region-specific information related to the selected region.
6. Toggle the night mode switch in the sidebar to switch between light and dark themes.

## Credits

This project was built using the following libraries:

- OpenStreetMap (OSM): https://www.openstreetmap.org/
- turfjs: https://turfjs.org/
- Ant.Design: https://ant.design/
- Redux: https://redux.js.org/

## License

This project is licensed under the MIT License. Feel free to use and modify it as per your requirements.

## Contributing

If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request on the GitHub repository. Your contributions are welcome!

## Authors

- [Your Name](https://github.com/yourusername) - Project Developer

---

We hope you find this app useful and informative. If you have any questions or need further assistance, please don't hesitate to reach out.

Happy mapping! 🗺️
