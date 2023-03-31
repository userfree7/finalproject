import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import './styles.css'
import img1 from './images_slider/img1.jpg'
import img2 from './images_slider/img2.jpg'
import img3 from './images_slider/img3.jpg'

export const Slider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="" />
            </SwiperSlide>
            ...
        </Swiper>
    )
}
