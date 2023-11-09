import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import homeBg from '../Assets/img/bg-min.webp'
import whiteLogo from '../Assets/img/white-logo.svg'
import { Pagination, Autoplay } from 'swiper/modules';

export default function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className="home-swiper"
      pagination={{
        clickable: true,
      }}
      modules={[Pagination,Autoplay]}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide>
        <img src={homeBg} alt="" className="home-swiper__image"/>
        <div className="container home-swiper__content">
          <img src={whiteLogo} alt="" />
          <p className="home-swiper__text">Корпоративного питания и инженерно-технической эксплуатации</p>
          <a href="#!" className="btn-pills"> Узнать больше</a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={homeBg} alt="" className="home-swiper__image"/>
        <div className="container home-swiper__content">
          <img src={whiteLogo} alt="" />
          <p className="home-swiper__text">Корпоративного питания и инженерно-технической эксплуатации</p>
          <a href="#!" className="btn-pills"> Узнать больше</a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={homeBg} alt="" className="home-swiper__image"/>
        <div className="container home-swiper__content">
          <img src={whiteLogo} alt="" />
          <p className="home-swiper__text">Корпоративного питания и инженерно-технической эксплуатации</p>
          <a href="#!" className="btn-pills"> Узнать больше</a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={homeBg} alt="" className="home-swiper__image"/>
        <div className="container home-swiper__content">
          <img src={whiteLogo} alt="" />
          <p className="home-swiper__text">Корпоративного питания и инженерно-технической эксплуатации</p>
          <a href="#!" className="btn-pills"> Узнать больше</a>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
