import useInput from '@/utils/customHooks/useInput';
import React from 'react'
import { useTranslation } from 'react-i18next'
import Label from '../Label'

const SignupForm = () => {
  const { t } = useTranslation();
  const [userId, onChangeUserId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [userName, onChangeUserName] = useInput('');
  
  const submitForm = () => {
    let param = {
      userId,
      password,
      userName
    }
    console.log(param);
  }
  
  return (
    <div className='sm:w-80 md:w-96 lg:w-120 h-auto m-auto content-center-center text-center mt-32 rounded-md	overflow-y-hidden border-solid border-2'>
        <div className='mt-4'>
          <input placeholder={t('USERID')} 
            className='w-4/5 pl-2 rounded-2xl flex m-auto bg-orange-50 mt-4 h-10 required' 
            type="text" 
            value={userId} 
            onChange={onChangeUserId}/>
        </div>
        <div className='mt-4'>
          <input placeholder={t('USERPW')} 
            className='w-4/5 pl-2 rounded-2xl flex m-auto bg-orange-50 mt-4 h-10 required' 
            type="text" 
            value={password} 
            onChange={onChangePassword}/>
        </div>
        <div className='mt-4'>
          <input placeholder={t('USERNAME')} 
            className='w-4/5 pl-2 rounded-2xl flex m-auto bg-orange-50 mt-4 h-10' 
            type="text" 
            value={userName} 
            onChange={onChangeUserName}/>
        </div>
      <div className='block' onClick={submitForm}>
        <Label title={t('SINGUP')}/>
      </div>
    </div>
  )
}

export default SignupForm