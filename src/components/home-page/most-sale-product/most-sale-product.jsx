import React from 'react'
import Bed from "../../../assets/bed.webp"
import NightStand from "../../../assets/night-stand.webp"
import Dresser from "../../../assets/dresser.webp"
import Bedding from "../../../assets/bedding.webp"




const MostSaleProduct  = () => {
    const MostSaleProduct = [
        {
            title: " Bed from $149",
            description: "Plus, free estimate and design support.",
            cardImage: Bed

        },
        {
            title: " Night Stands under $129",
            description: "Make a statement with your sink.",
            cardImage: NightStand

        },
        {
            title: " Dresscers from $199",
            description: "Make a statement with your sink.",
            cardImage: Dresser

        },
        {
            title: " Bedding Essential from $20",
            description: "Make a statement with your sink.",
            cardImage: Bedding

        }
    ]
    return (
        <>
            <div className='text-center'>
                <h1 className=' fw-bold my-4'>
                This Way for Bedroom Bliss
                </h1>
            </div>
            <div className='d-flex flex-warp'>
                {MostSaleProduct.map((data) => {
                    return (
                        <div className=''>
                            <img width={300} className='img-fluid mx-2' src={data.cardImage} alt="" />
                            <span>
                                <h4 className='fw-bold'>
                                    {data.title}
                                </h4>
                                {data.description}
                            </span>
                        </div>
                    )
                })}
            </div>
           

        </>

    )
}

export default MostSaleProduct