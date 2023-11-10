import partner from '../../Assets/img/partner-min.webp'
import whiteLogo from '../../Assets/img/white-logo.svg'

export default function PartnerComponent() {
  return (
    <div className="home-partner">
      <img src={partner} alt="" />
      <div className="container home-partner__content">
        <span className='logo'>
          <img src={whiteLogo} alt="" />
        </span>
        
        <div className='home-partner__info'>
          <h3 className='home-partner__title'>Наши партнеры довольны нами</h3>
          <div className='home-partner__line'></div>
          <p className='home-partner__text'>Если вас заинтересовали наши услуги, станьте нашим партнером и получите премиальные услуги</p>
        </div>
      </div>
    </div>
  )
}
