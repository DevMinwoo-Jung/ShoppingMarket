import React, { useEffect, useState } from 'react'

interface IProductsInfo {
  id: string;
  name: string;
  price: string;
  stock: string;
  brand: string;
  updateDate: string;
  src: string;
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
    <div className='w-3/4 h-3/4 m-auto top-14 border'>
      {
        ProductsInfo.map((element:IProductsInfo) => {
          return (
            <>
              {
                <>
                  <p>{element.id}</p>
                  <p>{element.name}</p>
                  <p>{element.price}</p>
                  <p>{element.stock}</p>
                  <p>{element.brand}</p>
                  <p>{element.updateDate}</p>
                  <p>{element.src}</p>
                </>
              }
            </>
          )
        })
      }
    </div>
  )
}

export default Products