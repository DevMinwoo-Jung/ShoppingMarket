import { IProductsInfo } from '@/utils/interface';
import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = () => {

  const [ProductsInfo, setProductsInfo] = useState([]);

  useEffect(() => {
    fetch('/mock/products.json')
    .then((res) => res.json())
    .then((data) => {
      console.log('------get Data-----');
      setProductsInfo(data);
    })
    .catch(() => {
    })
    return () => {
      console.log('-------Unmount------');
    };
  }, [])



  return (
    <div className='w-3/4 h-3/4 m-auto top-14 border flex-wrap flex' key={Math.random()}>
      {
        ProductsInfo.map((element:IProductsInfo) => {
          
          const { id, name, brand, desc, src } = element;
          return (
            <>
              {
                <div className='w-1/4 pl-2 pr-2'>
                  <Product key={id} id={id} name={name} brand={brand} desc={desc} src={src}/>
                </div>
              }
            </>
          )
        })
      }
    </div>
  )
}

export default Products