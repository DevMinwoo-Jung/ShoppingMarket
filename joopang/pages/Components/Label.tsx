import React, { FC } from 'react'

interface LabelInterface {
  title: string;
}

const Label:FC<LabelInterface> = (props) => {
  const { title } = props;

  return (
    <div className="w-3/4 text-center">
      <p className="text-base">{title}</p>
    </div>
  )
}

export default Label