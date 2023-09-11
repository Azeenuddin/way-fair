import React from 'react'
import Martha from "../../../assets/martha.webp"
import Kohler from "../../../assets/kohler.webp"

const BrandTrust = () => {
    return (
        <div>
            <div className='text-center py-5'>
                <h1>Brands You Trust. Prices You'll Love.</h1>
            </div>
            <div className="row container-fluid">
                <div className="col-6">
                    <img className='img-fluid' src={Martha} alt="" />
                    <div className='text-center py-3'>
                        <h5>
                            Office Find By Martha Stewart.
                        </h5>
                        <p>Save on desks, Office chairs, and smart storage.</p>

                    </div>
                </div>
                <div className="col-6">
                    <img className='img-fluid' src={Kohler} alt="" />
                    <div className='text-center py-3'>
                        <h5>
                            Meet the tone <sup>TM</sup> Collection.
                        </h5>
                        <p>

                            A warm, fresh take on mind-century fixtures.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default BrandTrust