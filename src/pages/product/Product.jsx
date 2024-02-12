import { useContext } from 'react'
import './product.css'
import { ShopContext } from '../../context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrums from '../../components/breadCrums/BreadCrums';
import ProductDisplay from '../../components/productDisplay/ProductDisplay';
import DescriptionBox from '../../components/descriptionBox/DescriptionBox';
import RelatedProducts from '../../components/realtedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))

  return (
    <div className='products'>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product