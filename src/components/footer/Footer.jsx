import './footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintrest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerLogo">
            <img src={footer_logo} alt="" />
            <p>STORE</p>
        </div>
        <ul className='footerLinks'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="socialIcons">
            <div className="footerIconsContainer">
              <img src={instagram_icon} alt="" />   
            </div>
            <div className="footerIconsContainer">
              <img src={pintrest_icon} alt="" />   
            </div>
            <div className="footerIconsContainer">
              <img src={whatsapp_icon} alt="" />   
            </div>
        </div>
        <div className="footerCopyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer