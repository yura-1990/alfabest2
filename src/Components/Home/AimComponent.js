import React from 'react'
import logo from '../../Assets/img/min-logo.svg'
import first from '../../Assets/img/work-min.webp'

export default function AimComponent() {
  return (
    <>
      <div className="container home-aim">
        <div className="home-aim__left">
          <img src={logo} alt="" className="" />
          <h2 className="title">Наша <span>цель</span></h2>
          <p className='home-aim__text'>
            Альфабест — предлагает комплексные решения по содержанию, клинингу, эксплуатации и техническому обслуживанию промышленных предприятий, объектов общественного питания, торговых и бизнес-центров, складских комплексов и технопарков. Мы поддерживаем высокие стандарты обслуживания и внедряем инновационные решения, применяя современные природосберегающие технологии.
          </p>
        </div>
        <div className='home-aim__right'>
          <div className="home-aim__item" >
            <div className='home-aim__item-content'>
              <span className="home-aim__index" >01</span>
              <p className="home-aim__text" >Сокращение издержек за счет оптимизации процессов</p>
            </div>
            <img className="home-aim__img" src={first} alt="" />
          </div>
          
          <div className="home-aim__item" >
            <div className='home-aim__item-content'>
              <span className="home-aim__index" >02</span>
              <p className="home-aim__text" >Улучшение качества услуг за счет привлечения </p>
            </div>
            <img className="home-aim__img" src={first} alt="" />
          </div>
          
          <div className="home-aim__item" >
            <div className='home-aim__item-content'>
              <span className="home-aim__index" >03</span>
              <p className="home-aim__text" >Концентрация усилий управленческой команды на основной деятельности</p>
            </div>
            <img className="home-aim__img" src={first} alt="" />
          </div>
          
          <div className="home-aim__item" >
            <div className='home-aim__item-content'>
              <span className="home-aim__index" >04</span>
              <p className="home-aim__text" >Адаптированные под ваши потребности меню и услуги Основные этапы заключения договора</p>
            </div>
            <img className="home-aim__img" src={first} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
