const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./Routes');

mongoose.connect(process.env.CONNECTION_URL).then((state) => console.log("done")).catch((err) => console.log("ERROR"));
const api = process.env.API_URL;

// Miiddleware 
app.use(bodyParser.json());
app.use(morgan('tiny'));

// Routers
app.use(`${api}/products`, routes.productRouter);
app.use(`${api}/category`, routes.categoryRouter);

app.listen(process.env.PORT, () => {
    console.log(api);
    console.log(`listening on https://localhost:${process.env.PORT}`)
});