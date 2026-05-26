import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Box, Typography, Stack } from '@mui/material';

import 'swiper/css';

export default function FooterSwiper({text}) {
  const list = Array(30).fill(`${text}`);

  return (
    <Box className="w-full bg-[#111111] py-6 border-b border-[#1F1F1F] overflow-hidden rounded-3xl mt-5">
      <Swiper
        modules={[Autoplay]}
        loop={true}               
        slidesPerView="auto"       
        spaceBetween={40}          
        speed={6000}               
        allowTouchMove={false}     
        autoplay={{
          delay: 0,                
          disableOnInteraction: false,
        }}
        className="marquee-swiper"
      >
        {list.map((text, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <Stack direction="row" spacing={5} className="items-center">
              <Typography 
                className="text-[#81807E] text-[14px] font-medium tracking-widest uppercase"
                sx={{ fontFamily: "'Roboto Flex', sans-serif" }}
              >
                {text}
              </Typography>
              <Box className="w-2 h-2 rounded-full bg-[#CE7D63] opacity-60" />
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .marquee-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </Box>
  );
}