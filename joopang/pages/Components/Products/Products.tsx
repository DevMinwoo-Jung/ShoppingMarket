import React, { useEffect, useState } from 'react'
import Content from './Content';
import ProductImg from './ProductImg';

interface IProductsInfo {
  id: string;
  name: string;
  price: string;
  stock: string;
  brand: string;
  updateDate: string;
  src: string;
  desc: string;
}

const Products = () => {

  const [ProductsInfo, setProductsInfo] = useState([])

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
    <div className='w-3/4 h-3/4 m-auto top-14 border flex-wrap flex'>
      {
        ProductsInfo.map((element:IProductsInfo) => {
          
          const { id, name, brand, desc, src } = element;
          
          return (
            <>
              {
                <div className='ml-2 mr-2' id={id}>
                  <ProductImg src={src} name={name}/>
                  <Content name={name} brand={brand} desc={desc} />
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