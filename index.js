// https://medium.com/swlh/jwt-authentication-authorization-in-nodejs-express-mongodb-rest-apis-2019-ad14ec818122

const cors = require("cors");
const path = require("path");
const express = require("express"); // Load Express
const userRouter = require("./src/router/user"); // Get the routes for user
const agreementRouter = require("./src/router/agreement");
const PORT = process.env.PORT || 4000; // Setting up ports
require("./src/db/db"); // Get the database connection

const app = express(); // Create an Express instance

app.use(cors());
app.use(express.json()); // Ensure the data that we send and receive from server is in JSON format
app.use(userRouter); // Handling routes for users
app.use(agreementRouter); // Handling routes for agreements

/*
    NOTE: Run command: npm run devstart
*/
app.listen(PORT, (req, res) => {
    console.log(`Server started at PORT ${PORT}`);
});