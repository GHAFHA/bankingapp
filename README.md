# CometWallet

CS 3354.005 Fall 2022

Professor Srimathi Srinivasan

Group 5: 
- Dean Greenberg
- Noel Johnson
- Oscar Mata-Galvan
- Vaughan McInerney
- Ruchi Patel
- Naod Tesfay


# Configure Development Environment

1. Install NodeJS from nodejs.org
2. Clone this repository to your local storage.
3. Open a shell in the repository directory.
4. Run `npm install`.  Wait for it to finish.
5. Run `npm install react-scripts`.  Wait for it to finish.
6. Run `npm install react-bootstrap`.  Wait for it to finish.

# Run CometWallet in Development Server

1. Open a shell in the repository directory.
2. Run `npm start`.  This should open a tab in your browser at `http://localhost:3000`.  You are now viewing CometWallet using the development server.

# Repository Structure

All the code our team has written can be found in the `src` folder.

## `App.js` and `index.js`

The file `App.js` holds the App component, which is the main React component.  The file `index.js` creates the main webpage and inserts the App component into the webpage.

## `components` folder

Inside the `components` folder, we have several subfolders.

The `classes` folder contains all the classes from our UML diagram.

The `screens` folder contains all the React components responsible for rendering webpages.

The `UI` folder contains React components that are reused across multiple pages in the application.

## `images` folder

This folder contains static image files used throughout the application.

## `navbar` folder

This folder contains the navbar UI component used at the top of pages throughout the application.