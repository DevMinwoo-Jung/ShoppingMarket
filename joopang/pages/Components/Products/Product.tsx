import React, { FC, useState } from 'react'
import Content from './Content'
import ProductDetail from './ProductDetail'
import ProductImg from './ProductImg'

interface IProduct {
  src: string;
  name: string;
  brand: string;
  desc: string;
  id: string;
}

const Product:FC<IProduct> = (props) => {
  
  const { id, name, brand, desc, src } = props;

  return (
    <div key={id}>
      <ProductImg src={src} name={name}/>
      <Content name={name} brand={brand} desc={desc} />
    </div>
  )
}

export default Product