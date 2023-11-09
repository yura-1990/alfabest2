import React from 'react'

export default function StatisticsComponent() {
  return (
    <>
      <div className='container home-statistics'>
        <div className="home-statistics__item">
          <div className="home-statistics__block">
            <i className="mu mu-location"></i>
            <p className="home-statistics__info">+320.000<span>кв.м²</span></p>
          </div>
          <p className="home-statistics__text">Площади объектов <br/> благоустройства</p>
        </div>
        <div className="home-statistics__item">
          <div className="home-statistics__block">
            <i className="mu mu-map"></i>
            <p className="home-statistics__info">+70.000<span>кв.м²</span></p>
          </div>
          <p className="home-statistics__text">Площади объектов <br/> клининга</p>
        </div>
        <div className="home-statistics__item">
          <div className="home-statistics__block">
            <i className="mu mu-water"></i>
            <p className="home-statistics__info">+1000</p>
          </div>
          <p className="home-statistics__text">Питающихся</p>
        </div>
        <div className="home-statistics__item">
          <div className="home-statistics__block">
            <i className="mu mu-person"></i>
            <p className="home-statistics__info">+500</p>
          </div>
          <p className="home-statistics__text">Сотрудников</p>
        </div>
      </div>
    </>
  )
}

