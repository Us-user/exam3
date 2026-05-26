import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import { CardMedia } from '@mui/material';

let img = 'https://to-dos-api.softclub.tj/images'
export default function ImgSwipper({ images = [] }) {
    return (
        <Swiper 
            modules={[Navigation]}
            navigation={true}
            observer={true}
            observeParents={true}
            className="mySwiper"
            style={{ width: '100%', height: '100%' }}>
            {images.map((el) => {
                return (
                    <SwiperSlide key={el.id}>
                        <img 
                            src={`${img}/${el.imageName}`} 
                            alt="" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
