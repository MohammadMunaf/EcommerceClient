import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import './imageSlider.css';
import ManIcon from '@mui/icons-material/Man';
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import SleddingIcon from '@mui/icons-material/Sledding';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import WebhookIcon from '@mui/icons-material/Webhook';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../Url';



const ImageSlider = () => {
  
  const value = [
    "",
    "Summer Collection ",
    "New Arrivals",
    "Top-rated style"
  ]
  const images = [
    "https://theadultman.com/wp-content/w3-webp/uploads/2021/08/how-to-spot-high-quality-clothes-best-brands-for-men.jpgw3.webp",
    "https://improb.com/wp-content/uploads/2017/12/The-best-waxed-canvas-jackets-for-men.jpg",
    "https://theadultman.com/wp-content/uploads/2021/11/Taylor-Stitch-review.jpg"
  ];
  const propertes = {
    duration: 2500,
    transitionDuration: 700,
    infinite: true,
    indicators: false,
    arrows: true
  }
  const navigate = useNavigate();
  const handleSubmit = (val) => {
    // event.preventDefault();
    Axios.get(`${baseUrl}/search?q=${val}`)
        // .then((response) => {
        //     //setproduct(response.data);
        //     navigate('/searchItems', { state: { fetchedData: response.data } });
        //     console.log(response.data);
        // }).catch((e) => {
        //     console.log(`error-->${e}`);
        // });
    }
  return (
    <div className="slide-container">
      <Slide {...propertes}>
        {images.map((imageUrl, index) => (
          <div className="each-slide" key={index}>
            <div style={{ weight: '500px', height: '650px', textAlign: 'center', background: `url(${imageUrl}) center no-repeat` }}>
              <img src={imageUrl} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%' }} />
              <div className='content'>
                <h1>{value[`${index + 1}`]}<div><button onClick={()=>handleSubmit("Men")} className='slideContainerButton'style={{border:'none',width:'170px',height:'40px',fontSize:'17px',letterSpacing:'3px'}} >Visit</button></div></h1>
              </div>
            </div>
          </div>
        ))}
      </Slide>
      <div className='img1'>
        <Link to={'ProductList'} style={{ textDecorationLine: 'none', color: 'black' }} className='cardLink'>
          <div className='card' style={{ marginRight: '5px' }}>
            <DryCleaningIcon style={{ fontSize: '49px' }} />
          </div>
        </Link>
        <div onClick={()=>handleSubmit("Shirts")} className='card' style={{ marginRight: '5px' }}>
          < ManIcon style={{ fontSize: '49px' }} />
        </div>
        <div onClick={()=>handleSubmit("Jeans")} className='card' style={{ marginRight: '5px' }}>
          <WebhookIcon style={{ fontSize: '49px' }} />
        </div>
        <div onClick={()=>handleSubmit("Boots")} className='card' style={{ marginRight: '5px' }}>
          <SnowshoeingIcon style={{ fontSize: '49px' }} />
        </div>
        <div onClick={()=>handleSubmit("Shirt")} className='card' style={{ marginRight: '5px' }}>
          <SleddingIcon style={{ fontSize: '49px' }} />
        </div>
        <div onClick={()=>handleSubmit("Tshirt")} className='card' style={{ marginRight: '5px' }}>
          <SatelliteAltIcon style={{ fontSize: '49px' }} />
        </div>
      </div>
    </div>
  )
}

export default ImageSlider;




// const images = [
//     "https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=800",
//     "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=800",
//   ];