import { SwiperSlide, Swiper } from "swiper/react";
import logo from "../../Assets/img/min-logo.svg";
import history from '../../Assets/img/foto-_1_-min.webp'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HistoryComponent() {
  
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const years = [2017, 2018, 2019, 2020, 2021, 2022]
      
      return '<span class="' + className + '">' + years[index] + '</span>';
    },
  };
  
  return (
    <div className="home-history">
      <div className="container home-history__content">
        <img src={logo} alt="" />
        <h3 className="title">История</h3>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className="home-history-swiper"
          pagination={pagination}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <div className="home-history-swiper__block">
              <img src={history} alt="" />
              <div className="home-history-swiper__content">
                <h3 className="home-history-swiper__title">2017</h3>
                <p className="home-history-swiper__text">
                  начало осуществления деятельности корпоративного питания и инженерно-технической эксплуатации
                  <br/><br/>
                  По требованиям контролирующих инстанций, техобслуживание зданий начинается с момента введения объекта в эксплуатации. В качестве управляющей компании может выступать любая организация, имеющая лицензию и соответствующие возможности для проведения измерительных, ремонтных работ.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-history-swiper__block">
              <img src={history} alt="" />
              <div className="home-history-swiper__content">
                <h3 className="home-history-swiper__title">2018</h3>
                <p className="home-history-swiper__text">
                  начало осуществления деятельности корпоративного питания и инженерно-технической эксплуатации
                  <br/><br/>
                  По требованиям контролирующих инстанций, техобслуживание зданий начинается с момента введения объекта в эксплуатации. В качестве управляющей компании может выступать любая организация, имеющая лицензию и соответствующие возможности для проведения измерительных, ремонтных работ.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-history-swiper__block">
              <img src={history} alt="" />
              <div className="home-history-swiper__content">
                <h3 className="home-history-swiper__title">2019</h3>
                <p className="home-history-swiper__text">
                  начало осуществления деятельности корпоративного питания и инженерно-технической эксплуатации
                  <br/><br/>
                  По требованиям контролирующих инстанций, техобслуживание зданий начинается с момента введения объекта в эксплуатации. В качестве управляющей компании может выступать любая организация, имеющая лицензию и соответствующие возможности для проведения измерительных, ремонтных работ.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-history-swiper__block">
              <img src={history} alt="" />
              <div className="home-history-swiper__content">
                <h3 className="home-history-swiper__title">2020</h3>
                <p className="home-history-swiper__text">
                  начало осуществления деятельности корпоративного питания и инженерно-технической эксплуатации
                  <br/><br/>
                  По требованиям контролирующих инстанций, техобслуживание зданий начинается с момента введения объекта в эксплуатации. В качестве управляющей компании может выступать любая организация, имеющая лицензию и соответствующие возможности для проведения измерительных, ремонтных работ.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-history-swiper__block">
              <img src={history} alt="" />
              <div className="home-history-swiper__content">
                <h3 className="home-history-swiper__title">2021</h3>
                <p className="home-history-swiper__text">
                  начало осуществления деятельности корпоративного питания и инженерно-технической эксплуатации
                  <br/><br/>
                  По требованиям контролирующих инстанций, техобслуживание зданий начинается с момента введения объекта в эксплуатации. В качестве управляющей компании может выступать любая организация, имеющая лицензию и соответствующие возможности для проведения измерительных, ремонтных работ.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-history-swiper__block">
              <img src={history} alt="" />
              <div className="home-history-swiper__content">
                <h3 className="home-history-swiper__title">2022</h3>
                <p className="home-history-swiper__text">
                  начало осуществления деятельности корпоративного питания и инженерно-технической эксплуатации
                  <br/><br/>
                  По требованиям контролирующих инстанций, техобслуживание зданий начинается с момента введения объекта в эксплуатации. В качестве управляющей компании может выступать любая организация, имеющая лицензию и соответствующие возможности для проведения измерительных, ремонтных работ.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
