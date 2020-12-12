const express = require('express');
const app = express();//execute express,now have the ability to create routes
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');//package for cross domain fetch
require('dotenv/config');//to connect to .env

//middleware for crossdomain fetching
app.use(cors())

//middleware for post request,whenever we hit any request this body parser runs
app.use(bodyParser.json());

//import routes from routes folder,s file
const postsRoute = require('./routes/posts')

//middleware on going to localhost/posts,(everytime we going to execute any route corresponding middleware runs)
app.use('/posts',postsRoute);//we can use multiple middlewares same as this by creating different router in posts.js
app.use('/',postsRoute);


//connect to DB using mongoClient.connect,1st parameter is for connecting to .env
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },()=>{
    console.log('connected to DB');
})


//listening to the server
app.listen(80);
