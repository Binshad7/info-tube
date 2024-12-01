const express = require("express")
const app = express();
const passport = require('./utils/googleAuth');
const cors = require('cors');

// env configuration
const env = require('dotenv')
env.config()

app.use(cors({
    origin : 'http://localhost:3000',
    credentials : true
}))

// mongoose connection
const connect = require('./config/connection'); 
connect()
.then((res)=>{
    console.log("mongodb connected ")
})
.catch(err=> console.log(err, "errord"))

console.log('hello');

// google Authentication
app.use(passport.initialize())

const adminRouter = require("./routes/adminRouter")
const userRouter = require('./routes/userRouter') 

app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)

app.listen(process.env.PORT,()=>{   
    console.log('working')
})