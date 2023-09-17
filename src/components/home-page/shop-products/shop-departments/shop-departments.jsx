import React from 'react'
import { useParams } from 'react-router-dom';

import rating from "../../../../assets/rating.png"
import { ShopDepartmentsData } from './shop-department-dummy-data';

const ShopDepartments = () => {

    const { departmentName } = useParams()
    let filteredData = ShopDepartmentsData.filter((prod) => prod.departmentName === departmentName)

    console.log(filteredData);
    return (
        <div className='px-5'>
            <h1>Popular Picks in {departmentName}</h1>
            <div className='d-flex flex-wrap '>
                {filteredData.map((item) => {
                    return (

                        <div className='cursor-pinter p-2 '>
                            <div className='text-center'>
                                <img width={270} src={item.imgSrc} className='rounded-4' alt="" />
                            </div>
                            <h6 className='text-truncate' style={{ width: "270px" }}>{item.productName}</h6>
                            <p>{item.compName}</p>
                            <div className='d-flex'>
                                <h5>From ${item.currentPrice} </h5> <span className='mx-2 text-decoration-line-through'>${item.oldPrice}</span>
                            </div>
                            <div>
                                <img height={30} src={rating} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default ShopDepartments