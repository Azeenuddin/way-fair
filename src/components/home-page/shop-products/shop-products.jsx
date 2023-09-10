import React from 'react';
import SaleImg from "../../../assets/sale.webp"
import ChairImg from "../../../assets/chair.webp"
import ChadherImg from "../../../assets/chadher.webp"
import AppliancesImg from "../../../assets/appliances.webp"
import PillowsImg from "../../../assets/pillows.webp"
import PetImg from "../../../assets/pet.webp"
import OutdoorImg from "../../../assets/outdoor.webp"

import "./shop-products.css"


const ShopProducts = () => {
  const productsData = [
    {
      srcImg: SaleImg,
      title: "Sale"
    },
    {
      srcImg: ChairImg,
      title: "Furniture"
    },
    {
      srcImg: ChadherImg,
      title: "Bedding & Bath"
    },
    {
      srcImg: AppliancesImg,
      title: "Appliances"
    },
    {
      srcImg: PillowsImg,
      title: "Pillows"
    },
    {
      srcImg: PetImg,
      title: "Pet"
    },
    {
      srcImg: OutdoorImg,
      title: "Outdoor"
    }
  ]
  return (
    <>
      <div className='text-center'>

        <h1 className='fw-bold my-4 '>Shop by Department </h1>
      </div>
      <div className='d-flex flex-wrap'>
        {
          productsData.map((item) => {
            return (
              <div className='text-center mx-2'>
                <img className='' height={200} src={item.srcImg} alt="sale" />
                <h4>{item.title}</h4>
              </div>
            )
          })
        }

        {productsData.map((y)=>{
          return(
            <div className="row">
              {}
            </div>
          )
        })}

      </div>
    </>
  )
}

export default ShopProducts