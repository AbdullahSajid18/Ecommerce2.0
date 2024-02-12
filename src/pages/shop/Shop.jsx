import Hero from '../../components/hero/Hero'
import NewCollections from '../../components/newCollection/NewCollections'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import Offers from '../../components/offer/Offers'
import Popular from '../../components/popular/Popular'
import './shop.css'
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop