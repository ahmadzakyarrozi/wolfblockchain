import { useEffect } from 'react';
import HeaderImage from '../../assets/wolfblockchain.jpg'
import data from './data.js';
import './header.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Header = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  }, []);

  return (
    <header id="header"> 
    <div className="container header__container">
      <div className="header__profile" data-aos="fade-up">
          <img src={HeaderImage}  alt="Header Potrait" />
      </div>
      <h3 data-aos="fade-up">Wolf Blockchain </h3>
      <p data-aos="fade-up">
     This is wolf blockchain that building on layer 2 solana which lower gasfee and proof of stake
      </p>

      <p data-aos="fade-up">
    contract : DjhhoWSeGTy78Cnv9cWUijY4cYFdSEJKmaF46mMnUM76
      </p>
      <div className="header__cta">
        <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=DjhhoWSeGTy78Cnv9cWUijY4cYFdSEJKmaF46mMnUM76&fixed=in" className='btn primary' data-aos="fade-up"> Buy </a>
        <a href="https://birdeye.so/token/DjhhoWSeGTy78Cnv9cWUijY4cYFdSEJKmaF46mMnUM76?chain=solana" className='btn light' data-aos="fade-up">Chart</a>
      </div>

      <h4> Keep stay tuned more to come !!</h4>
      <div className="header__socials">
        {
          data.map(item => <a key={item.id} href={item.link} target="_blank"
          rel="noopener noreferrer">{item.icon}</a>)
        }
      </div>
    </div>
    </header>
  )
}

export default Header