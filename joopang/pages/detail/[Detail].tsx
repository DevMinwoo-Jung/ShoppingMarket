import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Detail = () => {

  const router = useRouter();
  const { id } = router.query;

  const [detail, setDetail] = useState(null)
  
  console.log(detail)
  
  useEffect(() => {
    fetch('/mock/products.json')
    .then((res) => res.json())
    .then((data) => {
      console.log('------get Data in Detail-----');
      setDetail(data.filter((element:any) => element.id === id));
    })
    .catch(() => {
    })
    return () => {
      console.log('-------Unmount in Detail------');
    };
  }, [id])

  return (
    <div>{detail}</div>
  )
}

export default Detail