import Link from 'next/link';
import React, { FC, useState } from 'react'
import Content from './Content'
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
      <Link
        href={{ pathname: '/detail', query: { tag: id } }}
        as={`/detail/Detail/${id}`}
        key={id}
      >
      <ProductImg src={src} name={name}/>
      <Content name={name} brand={brand} desc={desc} />      
      </Link>
    </div>

  )
}

export default Product