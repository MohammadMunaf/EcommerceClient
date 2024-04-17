import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from '../../navbar/navbar';
import { addToCart } from '../../../actions';
import { useDispatch } from 'react-redux';
import { baseUrl } from '../../../Url';
import './show.css';
import { Button } from '@mui/material';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Quantity from '../../quantity/quantity';




const Show = () => {
    const { userId } = useParams();
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await Axios.get(`${baseUrl}/show/${userId}`);
                setProduct(response.data);
            } catch (error) {
                console.error(`Error fetching product: ${error}`);
            }
        };
        fetchProduct();
    }, [userId]);

    const handleCart = (product) => {
        dispatch(addToCart(product));
    }
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
    const [idx, setidx] = useState(0);
    const updateIdx = (i) => {
        setidx(i)
    }
    return (
        <div>
            <Navbar />
            <div className='body'>
                {/* <h1>Show Page</h1> */}
                <div className='item'>
                    <div className='image' style={{ width: '50%' }}>
                        <div className='mainImage' style={{ textAlign: 'center', height: '75%' }}>
                            <img
                                src={images[idx]}
                                alt="new"
                                style={{ width: '100%', height: '100%',transition:'' }}
                            />
                            {/* <Slide {...propertes}>
                                {images.map((imageUrl, index) => (
                                    <img src={imageUrl} alt={`Slide ${idx+1}`} style={{ width: '98%', height: '98%' }} />
                                ))}
                            </Slide> */}
                        </div>
                        <div className='referanceImage' style={{ height: '23%', marginTop: '5px' }}>
                            <img
                                src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="new"
                                style={{ height: '100%', width: '30%', margin: '2px'}}
                                onMouseOver={() => updateIdx(0)}
                            />
                            <img
                                src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="new"
                                style={{ height: '100%', width: '30%', margin: '2px' }}
                                onMouseOver={() => updateIdx(1)}
                            />
                            <img
                                src="https://images.pexels.com/photos/3775120/pexels-photo-3775120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="new"
                                style={{ height: '100%', width: '30%', margin: '2px' }}
                                onMouseOver={() => updateIdx(2)}
                            />
                        </div>

                    </div>
                    <div className='details' style={{ width: '50%' }}>
                        <div className='heading' style={{ fontSize: '25px' }}>
                            <h1 style={{ fontFamily: 'inherit' }}>{product.name}</h1>
                            <h1>Mens clothing</h1>
                            <div className='ratting' style={{}}>
                                <span><StarIcon style={{ color: 'orange' }} />
                                    <StarIcon style={{ color: 'orange' }} />
                                    <StarIcon style={{ color: 'orange' }} />
                                    <StarIcon style={{ color: 'orange' }} />
                                    <StarIcon style={{ color: 'orange' }} /></span>
                            </div>
                            <hr></hr>

                        </div>
                        <div className='description' style={{ marginTop: '10px' }}>
                            <p style={{ margin: '0', fontSize: '20px', color: 'rgb(73, 70, 70)' }}>{product.description}</p>
                            <p style={{ fontSize: '20px', color: 'rgb(73, 70, 70)' }}>Men Green & Navy Blue Checked Casual Sustainable Shirt</p>
                        </div>
                        <div className='price' style={{ fontSize: '30px', marginTop: '30px' }}>
                            <h3 style={{ margin: '0' }}><CurrencyRupeeIcon style={{ fontSize: '15px' }} />{product.price}</h3>
                        </div>
                        <span className='quantity' style={{ marginTop: '45px' }}>
                            <p style={{ paddingRight: '15px', fontSize: '20px', }}>Quantity</p><Quantity />
                        </span>
                        <span className='addCart' style={{ marginTop: '40px' }}>
                            <Button onClick={() => handleCart(product)} style={{ backgroundColor: 'rgb(29, 58, 81)', color: 'white', borderRadius: '0', width: '270px', height: '60px' }}>Add to Cart<ShoppingCartIcon style={{ paddingLeft: '15px' }} /></Button>
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Show;