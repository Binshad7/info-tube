import React from 'react'
import {MdClose} from 'react-icons/md'
import GoogleIcon from '../../assets/GoogleIcon'
import ContinueWithGoogle from 'react-google-button'

function SignCard({setIsFirst}) {

  const handleAuth = () =>{

      fetch('http://localhost:4000/api/user/auth/google',{
        method: "post",
        credentials: true,
      })
      .then(res=>{
        console.log("working")
      })
  }

  return (
    <div className='w-[400px] rounded-2xl z-10 bg-[#fff] h-[150px] absolute top-20 right-10'>
        <div className='flex items-center mt-2 text-[black]'>
            <GoogleIcon/>
            <h4 className='ml-3 font-serif text-[#454545]'>Signin to infotuube.com with google</h4>
            <MdClose className='ml-auto mr-2' onClick={()=> setIsFirst(false)}/>
        </div>
        <hr className='mt-2 '/>
        <div className='w-100 flex justify-center align-center h-[80%]'>
            <button><ContinueWithGoogle onClick={handleAuth}/></button>
        </div>
    </div>
  )
}

export default SignCard
