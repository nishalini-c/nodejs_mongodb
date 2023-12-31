const express = require('express');// this line import the express framework.
//It simplifies the process of building web applications and APIs 
//by providing a set of features and tools.
const Model = require('./model/model');//It is a built-in function in Node.js used to include external modules 
//(files or packages) into your program

const router = express.Router() //import the express and Create a new router instance using Express.
module.exports = router;//instance so that any file that imports this module will have access to the defined routes and middleware on that router.

//Post Method
router.post('/post', async (req, res) => {
        // Request body is expected to contain 'name' and 'age' properties
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        //save the data to datbase 
        const dataToSave = await data.save();
        // Respond with a JSON object containing the saved data
        res.status(200).json(dataToSave)
    }
    catch (error) {
 // If an error occurs during the save operation, respond with an error message
        res.status(400).json({message: error.message})
    }
})
//Get all Method
router.get('/getAll', async (req, res) => {
    try{
    // Retrieve all data from the database
        const data = await Model.find();
    // Respond with a JSON object containing the retrieved data
        res.json(data)
    }
    catch(error){
 // If an error occurs during the operation, respond with an error message
    res.status(500).json({message: error.message})
    }
})


// //Get by ID Method
      // router.get('/getOne/:id', (req, res) => {
      //     res.send('Get by ID API')
// Retrieve a single data record from the database using the provided ID

router.get('/getOne/:id', async (req, res) => {
    try{
        // Respond with a JSON object containing the retrieved data
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
    // If an error occurs during the operation, respond with an error message
        res.status(500).json({message: error.message})
    }
})
// })
//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;// Extract the ID and updated data from the request
        const options = { new: true }; // Specify options for the update operation (new: true returns the updated document)


        const result = await Model.findByIdAndUpdate(  // Use Model.findByIdAndUpdate to find and update the document based on ID
           id, updatedData, options
        )

        res.send(result)// Respond with the updated document

    }
    catch (error) {// If an error occurs during the operation, respond with an error message
         res.status(400).json({ message: error.message })
    }
})
//Delete by ID Method
router.delete('/delete/:id', async (req, res) => { //This sets up a route handler for HTTP DELETE requests to the '/delete/:id' endpoint. The ':id' in the route path is a URL parameter, 
    //and it can be accessed using req.params.id in the callback function.
    try {
        const id = req.params.id; //This line extracts the ID from the URL parameters (req.params.id) and assigns it to the variable id.
        const data = await Model.findByIdAndDelete(id)// Use Model.findByIdAndDelete to find and delete the document based on ID
        res.send(`Document with ${data.name} has been deleted..`)// Respond with a message indicating the document has been deleted

    }
    catch (error) {
        res.status(400).json({ message: error.message })
    } //This block is a try-catch statement. It is used to handle asynchronous operations, and in this case, 
    //it is trying to delete a document in the database based on the provided ID.
})
//Get by ID Method
router.get('/getOne/:id', (req, res) => { //This sets up a route handler for HTTP GET requests to the '/getOne/:id' endpoint. The ':id' in the route path is a URL parameter, and it can be accessed using req.
    //params.id in the callback function.
    res.send(req.params.id)   // Send the value of the 'id' parameter in the URL as the response

})

