const express = require('express');

const app = express();
const cors = require('cors');
require("dotenv").config({ path: ".env" });


app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    try{
        console.log("examhub API is running.......");
        res.send("<h1>Examhub is running</h1>")
    }
    catch{

    }
})

const userRoute = require('./routes/users');
app.use('/users',userRoute)
app.listen(4000);
// app.listen(process.env.APP_PORT)