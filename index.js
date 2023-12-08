// Load the dotenv module
require('dotenv').config();//is a function in Node.js used to import modules."dontenv"=>refers to the "dotenv" module, which is a popular Node.js module that helps manage environment variables in your application
const express = require('express');//Express is a web application framework for Node.js. It simplifies the process of building web applications by providing a set of features and tools for handling routes, middleware, templates, and more.
const mongoose = require('mongoose');// structures, performing CRUD operations, validation, and establishing connections to MongoDB databases.
const mongoString = process.env.DATABASE_URL;//process.env=> Node.js that holds the values of environment variables.
//DATABASE_URL is the specific environment variable being accessed.
//Environment variables are often used to store configuration settings or sensitive information like database connection strings.
const routes = require('./routes/routes');// the relative path to the module or file being imported. In this case, it's importing a file located at './routes/routes'.
 const routesemploy =require('./routes/routesemploy')// the relative path to the module or file being imported. In this case, it's importing a file located at './routes/routesemployed'.
const app = express();//  When called, it creates a new instance of an Express application. This instance represents your web application and is where you define routes, middleware, and other settings.
app.use(express.json());//The json() middleware parses incoming requests with JSON payloads and is automatically
app.use('/api', routes)
//This means that all requests to the path '/api' will be processed by the routes middleware function.
//The reason for having the second line might be to ensure that the routes defined in the routes middleware function are processed correctly even if there are any errors or exceptions thrown in other middleware functions that might be called before this.
app.use('/api2', routesemploy)//

// "connect mongodb database" 
mongoose.connect(mongoString);
//This line establishes a connection to the MongoDB database using the mongoose library. The mongoString variable should contain the connection string to my MongoDB database.
const database = mongoose.connection;
//database to mongodb atles connect 

database.on('error', (error) => {
    console.log(error)
})
//If any error occurs during the connection process, 
//the provided callback function will be executed, logging the error to the console.

database.once('connected', () => {
    console.log('Database Connected');
})
   //The connecte event is emitted once when the connection to the MongoDB database is successfully msg. When this event occurs, the provided callback function will be executed,
   // logging the message "Database Connected" to the console.
// end 

// server connection
app.listen(6000, () => {  //server to start listening for incoming requests on port 6000
    console.log(`Server Started at ${6000}`) //This line logs a message to the console indicating that the server has started. 
    })
// server connection end

