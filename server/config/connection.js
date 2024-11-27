const mongoose = require("mongoose")

const connect = async()=>{

    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/infotube",{
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        console.log('working ')
    }
    catch(error){
        console.log(error)
        process.exit(1);
    }
}

module.exports = connect