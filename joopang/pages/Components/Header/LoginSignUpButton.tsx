import React, { FC } from 'react';

interface ILoginSignUpButton {
  title: string;
}

const LoginSignUpButton:FC<ILoginSignUpButton> = (props) => {

  const { title } = props;

  const showForm = () => {

  }

  return (
    <div>
      <button onClick={showForm}>{title}</button>
    </div>
  )
}

export default LoginSignUpButton