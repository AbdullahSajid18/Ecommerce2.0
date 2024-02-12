import './descriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
        <div className="descriptionBoxNavigator">
            <div className="descriptionBoxNavbox">Description</div>
            <div className="descriptionBoxNavbox fade" >Reviews (122)</div>
        </div>
        <div className="descriptionBoxDescription">
            <p>
                And e-commerce website is an online platform that facilitate the buying and selling of products or services over the internet and serves as a virtual marketplace where businesses and individual showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to ther convenial accessibility, and the global reach they offer.
            </p>
            <p>
                E-commerce websites typically display products or services and detailed descriptions, images, prices, and any available varieties (e.g., sizes, colors), Each product usually has it's own dedication with relevent information.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox