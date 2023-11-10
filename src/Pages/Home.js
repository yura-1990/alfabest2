import SwiperComponent from '../Components/Home/SwiperComponent'
import AboutComponent from '../Components/Home/AboutComponent'
import StatisticsComponent from '../Components/Home/StatisticsComponent'
import AimComponent from '../Components/Home/AimComponent'
import PartnerComponent from '../Components/Home/PartnerComponent'
import HistoryComponent from '../Components/Home/HistoryComponent'

export default function Home() {
  return (
    <div>
      <SwiperComponent />
      <AboutComponent />
      <StatisticsComponent />
      <AimComponent />
      <PartnerComponent />
      <HistoryComponent />
    </div>
  )
}
