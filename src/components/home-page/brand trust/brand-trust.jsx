import React from 'react'
import Martha from "../../../assets/martha.webp"
import Kohler from "../../../assets/kohler.webp"

const BrandTrust = () => {
    return (
        <div>
            <h1>Brands You Trust. Prices You'll Love.</h1>
            <div className="row">
                <div className="col-6">
                    <img className='img-fluid' src={Martha} alt="" />
                    <span>
                        <b>
                            Office Find By Martha Stewart.
                        </b>
                        Save on desks, Office chairs, and smart storage.
                    </span>
                </div>
                <div className="col-6">
                    <img className='img-fluid' src={Kohler} alt="" />
                    <span>
                        <b>
                            Meet the tone <sup>TM</sup> Collection.
                        </b>
                        A warm, fresh take on mind-century fixtures.
                    </span>
                </div>
            </div>
        </div>


    )
}

export default BrandTrust