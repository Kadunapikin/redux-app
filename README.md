# Redux Counter App with Vite

This is a simple counter application built using React, Redux, and Vite. The app demonstrates basic state management with Redux, including actions and reducers for incrementing and decrementing a counter.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [How to Use](#how-to-use)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- Increment and decrement counter using Redux state management.
- Organized using Redux Toolkit for simplicity.
- Fast and optimized development with Vite.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Kadunapikin/redux-app
    ```
   
2. Navigate into the project directory:
    ```bash
    cd my-redux-app
    ```

3. Install the project dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

The app should now be running on `http://localhost:5173`.

## Project Structure

├── public # Static assets ├── src # Application source code │ ├── store # Redux store and slices │ │ ├── counterSlice.js │ │ └── store.js │ ├── App.jsx # Main app component │ └── main.jsx # Entry point of the app ├── index.html # Main HTML file └── package.json # Project dependencies



## How to Use

Once the app is running, you will see a simple interface with a counter and two buttons:
- **Increment**: Increases the counter value by 1.
- **Decrement**: Decreases the counter value by 1.

The app uses Redux for state management, with the counter's value stored in a global state and updated through actions.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library.
- **Redux Toolkit**: Simplified Redux development tools.
- **Vite**: Fast and lightweight development server and build tool.
- **JavaScript (ES6+)**: For component logic and Redux setup.

## License

This project is licensed under the MIT License - see the (LICENSE) file for details.

