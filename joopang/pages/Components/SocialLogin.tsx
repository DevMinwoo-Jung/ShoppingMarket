import Image from 'next/image';
import React, { FC } from 'react'

interface socialLoginInterface {
    title: string;
    src: string;
}

const SocialLogin:FC<socialLoginInterface> = (socialLoginObj) => {
  const { title, src } = socialLoginObj;

  return (
    <div className='w-4/5 rounded-2xl flex m-auto bg-orange-50 mt-4 cursor-pointer'>
      <Image className='p-2' width={40} height={40} src={src} alt={title}/>
      <p className='w-3/4 text-xl leading-10'>{title}</p>
    </div>
  )
}

export default SocialLogin