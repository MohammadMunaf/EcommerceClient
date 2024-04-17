import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import './imageSlider.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import SleddingIcon from '@mui/icons-material/Sledding';
import SkateboardingIcon from '@mui/icons-material/Skateboarding';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';


const ImageSlider = () => {
  const [idx, setIdx] = useState(0);
  const value = [
    "",
    "Summer Collection",
    "New Arrivals",
    "Holy Offers"
  ]
  const images = [
    "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3775120/pexels-photo-3775120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];
  const propertes = {
    duration: 3000,
    transitionDuration: 800,
    infinite: true,
    indicators: false,
    arrows: true
  }
  return (
    <div className="slide-container">
      <Slide {...propertes}>
        {images.map((imageUrl, index) => (
          <div className="each-slide" key={index}>
            <div style={{ weight: '500px', height: '735px', textAlign: 'center', background: `url(${imageUrl}) center no-repeat` }}>
              <img src={imageUrl} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%' }} />
              <div className='content'>
                <h1>{value[`${index + 1}`]}<div><Button variant="contained">Visit</Button></div></h1>
              </div>
            </div>
          </div>
        ))}
      </Slide>
      <div className='img1'>
        <div className='card' style={{ marginRight: '5px' }}>
          <DryCleaningIcon style={{fontSize:'49px'}} />
        </div>
        <div className='card' style={{ marginRight: '5px' }}>
          < ManIcon style={{fontSize:'49px'}}/>
        </div>
        <div className='card' style={{ marginRight: '5px' }}>
          <WomanIcon style={{fontSize:'49px'}}/>
        </div>
        <div className='card' style={{ marginRight: '5px' }}>
          <SkateboardingIcon style={{fontSize:'49px'}}/>
        </div>
        <div className='card' style={{ marginRight: '5px' }}>
          <SleddingIcon style={{fontSize:'49px'}}/>
        </div>
        <div className='card' style={{ marginRight: '5px' }}>
          <SatelliteAltIcon style={{fontSize:'49px'}}/>
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