import Image from 'next/image'
import React from 'react'

const LoginForm = () => {
  return (
    <div className='w-96 bg-#f2f2f2 m-auto content-center-center text-center mt-14'>
      <p className="text-2xl">Welcome</p>
      <Image width={48} height={48} className='w-10' src="/Joopang_logo.png" alt="" />
    </div>
  )
}

export default LoginForm