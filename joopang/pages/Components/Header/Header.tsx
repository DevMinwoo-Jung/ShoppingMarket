import { t } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next';
import LoginSignUpButton from './LoginSignUpButton'

const Header = () => {

  const demo = {
    isUser: true,
  }
  
  const { t } = useTranslation();

  return (
    <div className='fixed w-full bg-slate-600'>
      <div className='flex justify-end mr-4'>
        {
          demo 
          ?
          <>
            <LoginSignUpButton title={t('SINGUP')}/>
            <LoginSignUpButton title={t('LOGIN')}/>
          </>
          :
          <>
            <LoginSignUpButton title={t('LOGOUT')}/>
            <LoginSignUpButton title={t('MYINFO')}/>
          </>
        }
      </div>
    </div>
  )
}

export default Header