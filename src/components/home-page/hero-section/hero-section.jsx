import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import HeroImage1 from "../../../assets/hero-section-image-1.webp"
import HeroImage2 from "../../../assets/hero-section-image-2.webp"
import HeroImage3 from "../../../assets/hero-section-image-3.webp"
import HeroImage4 from "../../../assets/hero-section-image-4.webp"
import HeroImage5 from "../../../assets/hero-section-image-5.webp"
import HeroImage6 from "../../../assets/hero-section-image-6.webp"
const HeroSection = () => {
    return (
        <>

            <div className='container-fluid'>
                <div class="row">
                    <div class="col-7">
                        <Swiper
                            autoHeight={true}
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div>
                                    <img height={480} src={HeroImage1} alt='' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img height={480} src={HeroImage2} alt='' />
                                </div>
                            </SwiperSlide>


                        </Swiper>
                    </div>
                    <div class="col-5">
                        <div className='mb-4'>
                            <img width={530} height={230} src={HeroImage3} alt="" />
                        </div>
                        <div>
                            <img width={530} height={230} src={HeroImage4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid mt-4'>
                <div className="row">
                    <div className="col-4">
                        <img width={400} src={HeroImage4} alt="" />
                    </div>
                    <div className="col-4">
                        <img width={400} src={HeroImage5} alt="" />
                    </div>
                    <div className="col-4">
                        <img width={400} src={HeroImage6} alt="" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default HeroSection