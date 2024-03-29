const serverConfig = require('./src/configs/server.config');
const bodyParser = require('body-parser');
const dbConfig = require('./src/configs/db.config');
const mongoose = require('mongoose')
const express = require('express');
const ProductRouter = require('./src/api/routes/product');

//Initializing express
const app = express();

//Using the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

/**
 * Database connection 
 */
mongoose.connect(dbConfig.DB_URL);
app.use(express.json());
const db = mongoose.connection
db.on("error", () => console.log("Can't connect to DB"));
db.once("open", () => {
    console.log("Connected to mongo DB");
})

app.use('/api/product', ProductRouter);
app.listen(serverConfig.PORT, () => {
    console.log("server started is this port number: ", serverConfig.PORT);
})