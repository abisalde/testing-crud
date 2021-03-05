const express = require('express');
const internRouter = require('./src/router/inRouter');
const mongoose = require('mongoose');


const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use('/intern', internRouter)


const databaseURL = process.env.MONGODB_URI

mongoose.connect("mongodb+srv://webdev:kcV7ipiTk9DDJG6@crud.vzghg.mongodb.net/internDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
    console.log("<<:::> Connected to Database")
    })
    .catch(err => {
    console.log("There was an error while connecting to the database.")
    });

app.get('/' , (req, res) => {
    res.json("CRUD running")
});

const PORT = 1029
app.listen(PORT, () => {
    console.log("App listening on Port " + PORT)
});