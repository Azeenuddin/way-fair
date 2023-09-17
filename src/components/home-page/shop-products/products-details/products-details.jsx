import React from 'react'
import { useParams } from 'react-router-dom';

const ProductsDetails = () => {
    let { productId } = useParams();
  return (
    <div>ProductsDetails {productId}</div>
  )
}

export default ProductsDetails