import { SignUp } from '@clerk/nextjs'
import React from 'react'

const Registerpage = () => {
  return (
    <div className=' flex justify-center items-center h-screen' >
        <SignUp signInUrl='/login'  />
    </div>
  )
}

export default Registerpage