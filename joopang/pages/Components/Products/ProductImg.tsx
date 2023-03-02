import Image from 'next/image';
import React, { FC } from 'react'

interface IProductImg {
  src: string;
  name: string;
}

const ProductImg:FC<IProductImg> = (props) => {

  const { src, name } = props;

  return (
    <div className='w-1/4'>
      <Image className='w-full h-full' width={100} height={100} src={src} alt={name}/>
    </div>

  )
}

export default ProductImg