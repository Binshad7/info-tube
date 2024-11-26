const express = require("express")
const app = express();

// env configuration
const env = require('dotenv')
env.config()




app.listen(process.env.PORT,()=>{
    console.log('working')
})