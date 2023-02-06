import useInput from '@/utils/customHooks/useInput';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from "react-i18next";
import Label from '../Label';
import SocialLogin from '../SocialLogin';


const LoginForm = () => {
  const { t } = useTranslation()
  const [userId, onChangeUserId] = useInput('')
  const [password, onChangePassword] = useInput('')

  return (
    <div className='sm:w-80 md:w-96 lg:w-120 h-auto m-auto content-center-center text-center mt-32 rounded-md	overflow-y-hidden border-solid border-2'>
      <Image width={200} height={200} className="m-auto" src="/Joopang_logo.png" alt="" />
      <div className='block'>
        <div className='mt-4'>
          <input placeholder={t('INPUTID')} className='w-4/5 pl-2 rounded-xl flex m-auto bg-orange-50 mt-4 h-10' type="text" value={userId} onChange={onChangeUserId}/>
        </div>
        <div className='mt-4'>
          <input placeholder={t('INPUTPW')} className='w-4/5 pl-2 rounded-xl flex m-auto bg-orange-50 mt-4 h-10' type="text" value={password} onChange={onChangePassword}/>
        </div>
        <div className='w-4/5 pl-2 rounded-xl flex m-auto bg-orange-50 mt-4 h-10'>
          <Label title='로그인하기'/>
        </div>
        <div className='mt-4 mb-4'>
          <SocialLogin title={t('GOOGLELOGIN')} src={'/google.png'}/>
          <SocialLogin title={t('GITHUBLOGIN')} src={'/github.png'}/>
        </div>
      </div>
    </div>
  )
}

export default LoginForm