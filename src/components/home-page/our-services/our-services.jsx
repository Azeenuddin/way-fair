import React from 'react'
import { servicesData } from './dummyData'

const OurServices = () => {
  return (
    <>
        <div className='row container-fluid'>
                {
                    servicesData.map((item) => {
                        return (
                            <div className='text-center col-sm-12 col-md-3 col-lg-3'>
                                <img src={item.iconSrc} alt="" />
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

export default OurServices