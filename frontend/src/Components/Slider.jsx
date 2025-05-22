import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination } from 'swiper/modules';

const Slider = ({imagesGallery}) => {
    return (
        <div className='my-14 w-full'>
        <Swiper
        style={{
            '--swiper-navigation-color': '#192e03',
            '--swiper-pagination-color': '#fff',
        }}
        zoom={true}
        navigation={true}
        pagination={{
        clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
        >
        {
            imagesGallery?.map((photo,index)=>(
                <SwiperSlide key={index}>
                    <div className="swiper-zoom-container">
                        <img src={photo} className='w-10/12 h-80' />
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
    </div>
    )
}

/*
{
            imagesGallery.map((photo,index)=>(
                <SwiperSlide key={index}>
                    <div className="swiper-zoom-container">
                        <img src={photo} />
                    </div>
                </SwiperSlide>
            ))
        }
<SwiperSlide>
            <div className="swiper-zoom-container">
                <img src="/default_project.jpg" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-zoom-container">
                <img src="/default_project.jpg" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-zoom-container">
                <img src="/default_project.jpg" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-zoom-container">
                <img src="/default_project.jpg" />
            </div>
        </SwiperSlide> */

export default Slider