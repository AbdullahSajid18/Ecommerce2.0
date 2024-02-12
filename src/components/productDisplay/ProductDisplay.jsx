import "./productDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="productDisplay">
      <div className="productDisplayLeft">
        <div className="productDisplayImgList">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplayImage">
          <img src={product.image} alt="" className="productDisplayMainImg" />
        </div>
      </div>
      <div className="productDisplayRight">
        <h1>{product.name}</h1>
        <div className="productDisplayRightStars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productDisplayRightPrices">
          <div className="productDisplayRightPriceOld">
            ${product.old_price}
          </div>
          <div className="productDisplayRightPriceNew">
            ${product.new_price}
          </div>
        </div>
        <div className="productDisplayRightDesc">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className="productDisplayRightSize">
          <h1>Select Size</h1>
          <div className="productDisplayRightSizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=> {addToCart(product.id)}}>ADD TO CART</button>
        <p className="productDisplayRightCategory"><span>Category :</span>Women, T-Shirt, Crop Top</p>
        <p className="productDisplayRightCategory"><span>Tags :</span>Modern, latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
