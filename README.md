# Restaurant List App

Welcome to the Restaurant List App! This is a simple web application that allows you to explore and manage your list of favorite restaurants. You can use this README to get started with the app on your own computer.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Vs code](https://code.visualstudio.com/): Ensure you have Visual studio code installed to run the application.
- [Node.js](https://nodejs.org/): Ensure you have Node.js installed to run the application and its dependencies.

## Installation

1. **Clone the Repository**: Start by cloning this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/JosueMoora/tailorhub-front.git
   ```

2. **Navigate to the Directory**: Change your working directory to the project folder:

   ```bash
   cd tailorhub-front
   ```

3. **Install Dependencies**: Install the required dependencies for the frontend:

   ```bash
   npm install
   ```
4. **Environment Variables**: Set up the environment variables by creating a .env file in the client directory with the following content: <br>

    client:
   ```env
   TOKEN_SECRET=your-secret-key
   ```
    Replace your-secret-key with your own secret key for JWT authentication.

5. **Start the Frontend**:  Run the following command in the client directory to start the frontend:

   ```bash
   npm run dev
   ```
6. **Access the App**:   Open your web browser and go to http://localhost:3000 to access the Restaurant List App.

## Usage

 • Explore restaurants, mark them as favorites, and manage your list. <br>
 • Log in and log out to access your personalized favorites list.