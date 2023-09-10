import React from 'react'
import customekabinets from "../../../assets/custom-cabinets.webp"
import CabinetKnobs from "../../../assets/cabinet-knobs.webp"
import WaterNull from "../../../assets/water-null.webp"
import Chandeleiers from "../../../assets/chandeleiers.webp"
import TopBrands from "../../../assets/top_brands.png"

const KitchenGameChanger = () => {
    const KitchenGameChanger = [
        {
            title: " Custom kabinet made easy",
            description: "Plus, free estimate and design support.",
            cardImage: customekabinets

        },
        {
            title: " Kitchen Fauctes From $49",
            description: "Make a statement with your sink.",
            cardImage: WaterNull

        },
        {
            title: " Kitchen Fauctes From $49",
            description: "Make a statement with your sink.",
            cardImage: CabinetKnobs

        },
        {
            title: " Kitchen Fauctes From $49",
            description: "Make a statement with your sink.",
            cardImage: Chandeleiers

        }
    ]
    return (
        <>
            <div className='text-center'>
                <h1 className=' fw-bold my-4'>
                    Kitchen Game Changers – For Less
                </h1>
            </div>
            <div className='d-flex flex-warp'>
                {KitchenGameChanger.map((data) => {
                    return (
                        <div className=''>
                            <img className='img-fluid mx-2' src={data.cardImage} alt="kabinets" />
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
            <div className="row container-fluid my-4 bg-card px-3 py-1">
                <div className="col-6 d-flex align-items-center">
                    <div>
                        <h1>
                            Top Brands. <span>
                                Big Deals.
                            </span>
                        </h1>
                        <span>
                            <b>Kitchen scores</b> from LG, Moen and more.
                        </span>
                        <div className='mt-3'>
                            <button className='btn-primary rounded-pill text-white px-4 py-2 border border-0 ' type="button">Shop Now</button>
                        </div>
                    </div>

                </div>
                <div className="col-6">
                    <img className='img-fluid w-100' src={TopBrands} alt="" />
                </div>
            </div>

        </>

    )
}

export default KitchenGameChanger