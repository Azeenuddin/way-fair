import React from 'react'
import { brandsArr, savingWays } from './dummyData'

const WayFairBrands = () => {

    return (
        <>
            <div className='text-center py-5'>
                <h1>Explore our Exclusive Brands</h1>
                <p>Bring your vision to life with hand-curated collections, priced just right.</p>
                <a href="">Shop All</a>
            </div>
            <div className='row container-fluid'>
                {
                    brandsArr.map((item) => {
                        return (
                            <div className='text-center col-sm-12 col-md-2 col-lg-2'>
                                <img src={item.imgSrc} width={200} className='rounded-4 ' alt="kelly" />
                                <p>{item.title}</p>
                            </div>
                        )
                    })
                }

            </div>
            <div className='text-center py-5'>
                <h1>Three Different Ways to Save</h1>

            </div>
            <div className='row container-fluid'>
                {
                    savingWays.map((item) => {
                        return (
                            <div className='text-center col-sm-12 col-md-4 col-lg-4'>
                                <img src={item.imgSrc} width={350} className='rounded-4 ' alt="kelly" />
                                <h4 className='mt-3'>{item.title}</h4>
                                <p>{item.subTitle}</p>

                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default WayFairBrands