import React from 'react'

import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import Link from 'next/link'

const LoginButton = () => {
  return (
    
<SignedOut>

<li>
    <Link href="/login">
    <button className=" px-4 py-2 bg-blue-400 rounded-3xl"> Login</button>
    </Link>
   </li>
</SignedOut>
  )
}

export default LoginButton