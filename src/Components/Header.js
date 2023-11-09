import logo from '../Assets/img/logo.svg'


export default function Header() {
  return (
    <>
      <header className='header active'>
        <nav className="header__nav">
          <div className="container header__top">
            <a href="/" className="logo">
              <img src={logo} alt="" />
            </a>
            
            <ul className="header__list">
              <li><a className="header__link" href="">О компании</a></li>
              <li><a className="header__link" href="">Карьера</a></li>
              <li><a className="header__link" href="">Закупки</a></li>
              <li><a className="header__link" href="">Сотрудничество </a></li>
              <li><a className="header__link" href="">Контакты</a></li>
              <li><span className='header__link lang active'>Ru</span>  <span className="header__link verical-line">|</span> <span className='header__link lang'>Uz</span></li>
            </ul>
          </div>
          
          <div className='line'></div>
          
          <div className="container header__bottom">
            <ul className="header__list header__list_jcsb">
              <li><a className="header__link" href="">Инженерно-техническая эксплуатация</a></li>
              <li><a className="header__link" href="">Сервисное и бытовое обслуживание</a></li>
              <li><a className="header__link" href="">Корпоративное питание</a></li>
              <li><a className="header__link" href="">Транспортные перевозки </a></li>
            </ul>
          </div>
          
          <div className='line'></div>
          
        </nav>
      </header>
    </>
  )
}
