import React from 'react';
import SaleImg from "../../../assets/sale.webp"
import ChairImg from "../../../assets/chair.webp"
import ChadherImg from "../../../assets/chadher.webp"
import AppliancesImg from "../../../assets/appliances.webp"
import PillowsImg from "../../../assets/pillows.webp"
import PetImg from "../../../assets/pet.webp"
import OutdoorImg from "../../../assets/outdoor.webp"
import kitchen from "../../../assets/kitchen-image.webp"

import "./shop-products.css"
import { Link, useNavigate } from 'react-router-dom';


const ShopProducts = () => {
  const navigate = useNavigate();
  const productsData = [
    {
      srcImg: SaleImg,
      title: "Sale",
      departmentName: "Sale"
    },
    {
      srcImg: ChairImg,
      title: "Furniture",
      departmentName:"Furniture"
    },
    {
      srcImg: ChadherImg,
      title: "Bedding & Bath",
      departmentName:"BeddingBath"
    },
    {
      srcImg: AppliancesImg,
      title: "Appliances",
      departmentName:"Appliances"
    },
    {
      srcImg: PillowsImg,
      title: "Pillows",
      departmentName:"Pillows"
    },
    {
      srcImg: PetImg,
      title: "Pet",
      departmentName:"Pet"
    },
    {
      srcImg: OutdoorImg,
      title: "Outdoor",
      departmentName:"Outdoor"
    },
    {
      srcImg: kitchen,
      title: "Kitchen",
      departmentName:"Kitchen"
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
              <div className='text-center mx-2 cursor-pinter' onClick={()=>{navigate(`/shop-departments/${item.departmentName}`)}}>
                <img className='' height={200} src={item.srcImg} alt="sale" />
                <h4>{item.title}</h4>
              </div>

            )
          })
        }

      </div>
    </>
  )
}

export default ShopProducts