import { IProductsInfo } from '@/utils/interface';
import React, { FC } from 'react'

interface ProductDetail {
  element: IProductsInfo
}

const ProductDetail:FC<IProductsInfo> = (props) => {

  const { id, name, price, stock, brand, updateDate, src, desc } = props;

  return (
    <div className='absolute min-w-60 min-h-60 w-3/4 h-3/4 m-auto z-10 border-2 left-1/4 top-1/4 bg-black'>
      {name}
    </div>
  )
}

export default ProductDetail