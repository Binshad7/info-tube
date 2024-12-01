const jwt = require('jsonwebtoken')

// generate token  
const generateToken=async(userData)=>{

    try{
        const token = await jwt.sign(userData, process.env.JWT_SECRET_TOKEN,{
            expiresIn: "1d"
        })
        return token 
    }
    catch(err){
        console.log(err)
        throw new Error(err.message)
    }
    
}

const verifyToken=async(userData)=>{

    try{
        const verified = await jwt.verify(userData, process.env.JWT_SECRET_TOKEN)
        if(verified){
            return {success: true}
            
        }
        else{
            return{ success: false}
        }
    }
    catch(err){
        console.log(err, "error occured")
        throw new Error("error occured while creating token")
    }   
}


module.exports = { generateToken,verifyToken }