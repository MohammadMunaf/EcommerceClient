import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './newArrival.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { baseUrl } from '../../Url';


export default function NewArrival() {
    const [allproduct, setallproduct] = useState([]);
    const fetchData = (value) => {
        Axios.get(`${baseUrl}/products?q=${value}&l=${8}`)
            .then((response) => {
                setallproduct(response.data);
            })
            .catch((e) => {
                console.error(`error-->${e}`);
            });
    }
    useEffect(() => {
        fetchData("All");
    }, []);
    return (
        <div className='newArrivalsCollections'>
            <div className='newArrival' style={{ width: '100%', height: '140px', backgroundColor: 'white', marginBottom: '20px', marginTop: '20px' }}>
                <h1 style={{ paddingTop: '34px', fontSize: '55px', marginLeft: '35px' }}>New Arrival</h1>
                <Link to={'ProductList'} style={{ textDecorationLine: 'none', color: 'rgb(29, 58, 81)', marginRight: '50px', fontSize: '20px', paddingTop: '34px' }}>Visit All</Link>
            </div>
            <div className='products'>
                <div className='newArrivalProduct'>
                    {Array.isArray(allproduct) && allproduct.map(product => (
                        <Card sx={{ width: 290, height: 295, boxShadow: 'none' }} className='product' key={product._id}>
                            <Link to={`/show/${product._id}`} style={{ textDecorationLine: 'none' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    width="100"
                                    height="220"
                                    image={product.images[2]}

                                />
                                <div className="newArrivalProductDetails" style={{ color: 'GrayText', textAlign: 'center' }}>
                                    <span>
                                        <p style={{ margin: '3px', maxHeight: '18.5px', marginTop: '15px' }}>{product.name}</p>
                                        {/* <h2 style={{margin:'3px',color:'rgb(29, 58, 81)'}}><CurrencyRupeeIcon style={{ fontSize: '15px' }} />{product.price}</h2> */}
                                    </span>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>

        </div >
    )
}


