import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './Swipercss.css';
import { Navigation, Thumbs } from 'swiper/modules';
import { mockData } from '../constant/mockData';

const SwiperComponent = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const [mainSwiper, setMainSwiper] = useState();

  const handleThumbClick = (index) => {
    if (mainSwiper) {
      mainSwiper.slideTo(index);
    }
  };

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
        }}
        spaceBetween={10}
     
        navigation={false}

        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
        loop={true}
        grabCursor={true}
        onSwiper={setMainSwiper}
        modules={[Navigation, Thumbs]}
        className='swiper '
      >
   
            {mockData.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={`Slide ${item.id}`} />

          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        loop={true}
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        modules={[Navigation, Thumbs]}
        className=' swiper2 mt-7'
   
      >
     
           {mockData.map((item, index) => (
          <SwiperSlide  key={item.id} onClick={() => handleThumbClick(index)}>
            <img  src={item.image} alt={`Thumbnail ${item.id}`} />
            
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
