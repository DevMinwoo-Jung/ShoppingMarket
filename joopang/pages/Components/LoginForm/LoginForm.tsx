import Image from 'next/image';
import React from 'react';
import { useTranslation } from "react-i18next";


const LoginForm = () => {
  const { t } = useTranslation()

  return (
    <div className='w-96 bg-#f2f2f2 m-auto content-center-center text-center mt-14'>
      <p className="text-2xl">{t('LOGIN')}</p>
      <Image width={200} height={200} className="m-auto" src="/Joopang_logo.png" alt="" />
    </div>
  )
}

export default LoginForm