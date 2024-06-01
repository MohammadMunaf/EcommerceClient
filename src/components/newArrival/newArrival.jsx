import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './newArrival.css';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { baseUrl } from '../../Url';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


// let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function NewArrival() {
    const [allproduct, setallproduct] = useState([]);
    const [today, setToday] = useState("");
    const fetchData = (value) => {
        Axios.get(`${baseUrl}/products?q=${value}&l=${8}`)
            .then((response) => {
                //console.log(response.data.filter((p)=>p.date==='2024-03-26T09:56:54.157Z'));
                setallproduct(response.data.filter((p) => p.date >= '2024-04-01'));
            })
            .catch((e) => {
                console.error(`error-->${e}`);
            });
    }
    useEffect(() => {
        fetchData("All");
        var today = new Date();
        // console.log(today);
        setToday(today);
    }, []);

    const handleDelete = (id) => {
        Axios.delete(`${baseUrl}/delete/${id}`)
            .then((response) => {
                //console.log(response.data);
                fetchData("All");
            }).catch((e) => {
                console.log(`error-->${e}`);
            })
    }
    return (
        <div className='newArrivalsCollections'>
            <div className='newArrival' style={{ width: '100%', height: '140px', backgroundColor: 'white', marginBottom: '20px', marginTop: '20px'}}>
                <h1 style={{paddingTop:'34px',fontSize:'55px',marginLeft:'35px'}}>New Arrival</h1>
                {/* <p><Link to={'ProductList'} style={{textDecorationLine:'none',color:'rgb(29, 58, 81)',marginRight:'30px',fontSize:'20px'}}>Visit All</Link></p> */}
            </div>
            <div className='products'>
                <div className='newArrivalProduct'>
                    {Array.isArray(allproduct) && allproduct.map(product => (
                        <Card sx={{ width: 290, height: 295, boxShadow: 'none' }} className='product' key={product._id}>
                            <Link to={`/show/${product._id}`} style={{textDecorationLine:'none'}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                width="100"
                                height="220"
                                image={product.images[2].url}

                            />
                            <div className="newArrivalProductDetails"style={{color:'GrayText',textAlign:'center'}}>
                                    <span>
                                    <p style={{margin:'3px',maxHeight:'18.5px',marginTop:'15px'}}>{product.name}</p>
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

{/* <Button size="small" color="primary" onClick={() => handleDelete(product._id)}>Delete</Button> */}

// https://www.backcountry.com/images/items/1200/FSN/FSNI07Q/DARBRO_D5.jpg

