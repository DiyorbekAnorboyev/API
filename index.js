const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const boddyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const app = express();

app.use(express.static('view'))   
app.use(boddyParser.json())
app.use(boddyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.json());

const mongoUrl = process.env.MONGOURL;
mongoose.connect(mongoUrl, { useNewUrlParser: true, })
  .then(() => {console.log("Connected MongoDB")})
  .catch((err) => {console.log(err)})

// ALl data  
app.get("*", require('./controller/get_data'));     

// Create
app.post("/api/phone/add", require('./controller/post_data'));
app.post("/register", require('./controller/post_data'));

//Update
app.put('/api/phone/:id', require('./controller/put_data'))

// Delete
app.delete("/api/phone/:id", require('./controller/delete_data'))

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
