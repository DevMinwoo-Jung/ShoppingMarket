import useInput from '@/utils/customHooks/useInput';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from "react-i18next";


const LoginForm = () => {
  const { t } = useTranslation()
  const [userId, onChangeUserId] = useInput('')
  const [password, onChangePassword] = useInput('')

  return (
    <div className='sm:w-80 md:w-96 lg:w-120 h-auto bg-#fffcfc m-auto content-center-center text-center mt-32 border-r-4'>
      <p className="text-2xl">{t('LOGIN')}</p>
      <Image width={200} height={200} className="m-auto" src="/Joopang_logo.png" alt="" />
      <div className='block'>
        <div className='mt-4'>
          <input type="text" value={userId} onChange={onChangeUserId}/>
        </div>
        <div className='mt-4'>
          <input type="text" value={password} onChange={onChangePassword}/>

        </div>
      </div>
    </div>
  )
}

export default LoginForm