const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose");
const formdata = require('./formdata');
const app=express()
const port = process.env.PORT || 8000;



app.use(express.json());
app.use(cors());
const connection_url= 'mongodb+srv://admin:admin123@jobs.i6zkc0p.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(connection_url,{
   
    useNewUrlParser: true,
    useUnifiedTopology: true,

   
     
});



app.get("/",(req,res)=> res.status(200).send("HOMEPAGE"));
app.post("/register", (req, res) => {
    const formDetail = req.body;
  
    console.log("Form Detail >>>>", formDetail);
  
    Products.create(formDetail, (err, data) => {
      if (err) {
        res.status(500).send(err.message);
        console.log(err);
      } else {
        res.status(201).send(data);
      }
    });
  });
  
app.listen(port,()=>console.log("listening on port",port));
