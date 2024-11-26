const express = require("express")
const app = express();

// env configuration
const env = require('dotenv')
env.config()


console.log('hello');


app.listen(process.env.PORT,()=>{
    console.log('working')
})