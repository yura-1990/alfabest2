import about from '../../Assets/img/foto-min.webp'
import logo from '../../Assets/img/min-logo.svg'
export default function AboutComponent() {
  return (
    <>
     <div className='container home-about'>
        <img src={about} alt="" className="home-about__img"/>
        <div className="home-about__content">
          <img src={logo} alt="" className="" />
          <h2 className="home-about__title">о нашей компании</h2>
          <p className="home-about__text">
            Компания Альфа бест —оператор комплексного обслуживания вахтовых поселков на территории Республики Узбекистан <br/> Глубокие знания, разносторонний опыт и профессионализм наших сотрудников — это гарантия успехов во всех сферах деятельности, которыми занимается компания.. Наши задачи — обеспечить сервис высокого качества , снизить издержки, дать необходимый комфорт. <br/> Основным заказчиком услуг Компании на протяжении пяти лет является ПАО ЛУКойл что само по себе говорит о качестве наших услуг
          </p>
          <a href="#!" className="btn-pills"> Узнать больше</a>
        </div>
        
      </div> 
    </>
  )
}
