import { Helmet } from 'react-helmet-async'
import Categories from '../../components/Categories/Categories'
import Rooms from '../../components/Home/Rooms'
import Banner from "../../assets/images/banner2.jpg"

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Vacation Homes & Condo Rentals</title>
      </Helmet>
      {/* Banner Section */}
      <img className='w-100%' src={Banner} alt="" />
      {/* Categories section  */}
      <Categories />
      {/* Rooms section */}
      <Rooms />
    </div>
  )
}

export default Home
