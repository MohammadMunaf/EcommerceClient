import { Link, useNavigate, useParams } from 'react-router-dom';
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
    const [imageArray,setImageArray]=useState([])
    const dispatch = useDispatch();
    const navigate=useNavigate();
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await Axios.get(`${baseUrl}/show/${userId}`);
                setProduct(response.data);
                setImageArray(response.data.images);
            } catch (error) {
                console.error(`Error fetching product: ${error}`);
            }
        };
        fetchProduct();
    }, [userId]);

    const handleCart = (product) => {
        dispatch(addToCart(product));
    }
    // for(let img of imageArray){
    //     console.log(img);
    // }
    //console.log(imageArray[0].url);
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
    const handleEdit=(id)=>{
        navigate('/edit',{state:{id:id}});
    }
    return (
        <div>
            <Navbar />
            <div className='body'>
                {/* <h1>Show Page</h1> */}
                <div className='item'>
                    <div className='image' style={{ width: '50%'}}>
                        <div className='mainImage' style={{ textAlign: 'center', height: '50%',width:'100%' }}>
                            
                            <img
                                src={imageArray[idx]}
                                alt="new"
                                style={{ width: '100%', height: '100%',transition:'' }}
                            />
                            {/* <Slide {...propertes}>
                                {images.map((imageUrl, index) => (
                                    <img src={imageUrl} alt={`Slide ${idx+1}`} style={{ width: '98%', height: '98%' }} />
                                ))}
                            </Slide> */}
                        </div>
                        <div className='referanceImage' style={{ height: '19%', marginTop: '5px' }}>
                            <img
                                src={imageArray[0]}
                                alt="new"
                                style={{ height: '100%', width: '30%', margin: '2px'}}
                                onMouseOver={() => updateIdx(0)}
                            />
                            <img
                                src={imageArray[1]}
                                alt="new"
                                style={{ height: '100%', width: '30%', margin: '2px' }}
                                onMouseOver={() => updateIdx(1)}
                            />
                            <img
                                src={imageArray[2]}
                                alt="new"
                                style={{ height: '100%', width: '30%', margin: '2px' }}
                                onMouseOver={() => updateIdx(2)}
                            />
                        </div>

                    </div>
                    <div className='details' style={{ width: '50%' }}>
                        <div className='heading' style={{ fontSize: '25px',color:'rgb(29, 58, 81)' }}>
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
                            {/* <p style={{ fontSize: '20px', color: 'rgb(73, 70, 70)' }}>Men Green & Navy Blue Checked Casual Sustainable Shirt</p> */}
                        </div>
                        <div className='price' style={{ fontSize: '30px', marginTop: '30px' }}>
                            <h3 style={{ margin: '0' ,color:'rgb(29, 58, 81)' }}><CurrencyRupeeIcon style={{ fontSize: '15px',color:'rgb(29, 58, 81)' }} />{product.price}</h3>
                        </div>
                        <span className='quantity' style={{ marginTop: '45px' }}>
                            <p style={{ paddingRight: '15px', fontSize: '20px', }}>Quantity</p><Quantity />
                        </span>
                        <span className='addCart' style={{ marginTop: '40px' }}>
                            <Button onClick={() => handleCart(product)} style={{ backgroundColor: 'rgb(29, 58, 81)', color: 'white', borderRadius: '0', width: '270px', height: '60px' }}>Add to Cart<ShoppingCartIcon style={{ paddingLeft: '15px' }} /></Button>
                            {/* <Button onClick={()=>handleEdit(product._id)} style={{ backgroundColor: 'rgb(29, 58, 81)', color: 'white', borderRadius: '0', width: '270px', height: '60px',marginLeft:'5px' }}>Edit<ShoppingCartIcon style={{ paddingLeft: '15px' }} /></Button> */}
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Show;