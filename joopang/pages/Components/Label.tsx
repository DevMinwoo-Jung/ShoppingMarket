import React, { FC } from 'react'

interface LabelInterface {
  title: string;
}

const Label:FC<LabelInterface> = (props) => {
  const { title } = props;

  return (
    <div className="w-full text-center text-lg leading-10 cursor-pointer">
      <p>{title}</p>
    </div>
  )
}

export default Label