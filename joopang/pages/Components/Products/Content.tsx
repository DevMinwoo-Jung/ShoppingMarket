import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';

interface IContent {
  name: string;
  brand: string;
  desc: string;
}

const Content:FC<IContent> = (props) => {
  const { name, brand, desc } = props;

  return (
    <div className='m-4'>
      <div className='flex mr-2'>
        <span className='mr-2'>{name}:</span>
        <span>{brand}</span>
      </div>
      <span className='text-left'>{desc}</span>
    </div>
  )
}

export default Content