import React from 'react'
import logo from '../../Assets/img/min-logo.svg'

export default function AimComponent() {
  return (
    <>
      <div className="container home-aim">
        <div className="home-aim__left">
          <img src={logo} alt="" className="" />
          <h2 className="home-aim__title">Наша <span>цель</span></h2>
          <p className='home-aim__text'>
            Альфабест — предлагает комплексные решения по содержанию, клинингу, эксплуатации и техническому обслуживанию промышленных предприятий, объектов общественного питания, торговых и бизнес-центров, складских комплексов и технопарков. Мы поддерживаем высокие стандарты обслуживания и внедряем инновационные решения, применяя современные природосберегающие технологии.
          </p>
        </div>
        <div className='home-aim__right'>
          <div>
            <span>01</span>
            <p>Сокращение издержек за счет оптимизации процессов</p>
          </div>
        </div>
      </div>
    </>
  )
}
