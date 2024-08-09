

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';


 import img1 from '../../../public/banner/banner-1.jpg'
 import img2 from '../../../public/banner/banner-2.jpg'
 import img3 from '../../../public/banner/banner-3.jpg'
// import required modules
import { Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src={img1} className='w-full h-[450px] rounded-2xl' alt="image host"/>
            <p className='absolute z-10 bottom-44 right-44 w-[500px] mx-auto text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ipsum dolor assumenda similique aperiam consequatur quod placeat dignissimos nulla totam quaerat, quibusdam veritatis, eveniet aut minima aliquam! Delectus, sunt at.</p>
            </SwiperSlide>
            <SwiperSlide><img src={img2} className='w-full h-[450px] rounded-2xl' alt="image host"/>
            <p className='absolute z-10 bottom-44 right-44 w-[500px] mx-auto text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ipsum dolor assumenda similique aperiam consequatur quod placeat dignissimos nulla totam quaerat, quibusdam veritatis, eveniet aut minima aliquam! Delectus, sunt at.</p>
            </SwiperSlide>
            <SwiperSlide><img src={img3} className='w-full h-[450px] rounded-2xl' alt="image host"/>
            <p className='absolute z-10 bottom-44 left-44 w-[500px] mx-auto text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ipsum dolor assumenda similique aperiam consequatur quod placeat dignissimos nulla totam quaerat, quibusdam veritatis, eveniet aut minima aliquam! Delectus, sunt at.</p>
            </SwiperSlide>
            <SwiperSlide><img src={img1} className='w-full h-[450px] rounded-2xl' alt="image host"/>
            <p className='absolute z-10 bottom-44 right-44 w-[500px] mx-auto text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ipsum dolor assumenda similique aperiam consequatur quod placeat dignissimos nulla totam quaerat, quibusdam veritatis, eveniet aut minima aliquam! Delectus, sunt at.</p>
            </SwiperSlide>
          </Swiper>
        </>
      );
    }

export default Slider;