const mongoose = require('mongoose'); //import the mongoose libiray and libiray fo mongoose and nodejs

const dataSchema = new mongoose.Schema({ // create a new mongooseschema named="dataschema" 
    //and defines the structure and constraints for documents in a MongoDB collection.
    //create a dataschema
    name: {
        required: true,//required: true indicates that the name field is mandatory for every document.
        type: String //specifies that the name field should store numeric values.
    },
    age: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema) //Exports a Mongoose model based on the defined schema. The model is named 'Data', and it will interact with a MongoDB collection named 'datas' (MongoDB automatically pluralizes the model name to create the collection name). 
//The dataSchema is used as the schema for this model.

//"what is dataschema"
//A database schema defines the structure of a database, including tables, fields, relationships, views, indexes, and other elements.
//It outlines the organization of data and the relationships between different data entities.
//Database schemas are typically created and managed during the database design phase.


//"what is datamodel"
//The datamodel is the actual data structure that is stored in the database.
//It is the result of applying the schema to the data.

//"what is a mongoose model"
//A mongoose model is a class with which we construct documents.
//It is a constructor function that takes a schema and optional additional options.
//The model is responsible for creating instances of documents that adhere to the schema.
//The model is also responsible for interacting with the MongoDB server.

//"what is a mongoose document"
//A mongoose document is an instance of a model and represents a single, logical object with
//methods and properties.
//"what is a mongoose query"
//A mongoose query is a special object that is used to retrieve documents from the database.
//It is created by chaining methods onto a model.

//"what is a mongoose schema"
//A mongoose schema is a set of rules and definitions for creating documents.
//It is used to define the structure of the data in the database.
//A schema is a blueprint for creating documents.

