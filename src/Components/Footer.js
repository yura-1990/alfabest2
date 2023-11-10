import logo from '../Assets/img/logo.svg'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content container">
        <div className='footer__left'>
          <span className="logo">
            <img src={logo} alt="" />
          </span>
          
          <ul className='footer__list'>
            <li><a href="" className='footer__link'>Карьера</a></li>
            <li><a href="" className='footer__link'>Закупки</a></li>
            <li><a href="" className='footer__link'>О компании</a></li>
            <li><a href="" className='footer__link'>Наши партнеры</a></li>
            <li><a href="" className='footer__link'>Контакты</a></li>
            <li><a href="" className='footer__link'>Сотрудничество</a></li>
          </ul>
          
          <ul className='footer__list'>
            <li><a href="" className='footer__link'>Сервисное и бытовое обслуживание</a></li>
            <li><a href="" className='footer__link'>Корпоративное питание</a></li>
            <li><a href="" className='footer__link'>Транспортные перевозки</a></li>
            <li><a href="" className='footer__link'>Инженерно-техническая эксплуатация</a></li>
          </ul>
        </div>
        
        <div className='footer__right'>
          <p className='footer__text'>Подписывайтесь на нас</p>
          <div className='footer__social'>
            <a href=""><i className="mu mu-telegram"></i></a>
            <a href=""><i className="mu mu-instagram"></i></a>
            <a href=""><i className="mu mu-facebook"></i></a>
          </div>
        </div>
      </div>
      
      <div className='container dev-company'>
        <div className='line'></div>
        <div className='dev-company__content'>
          <span className='dev-company__logo'></span>
          <ul className='dev-company__list'>
            <li><a href="" className='dev-company__link'>Помощь</a></li>
            <li><a href="" className='dev-company__link'>Стань частью команды</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
