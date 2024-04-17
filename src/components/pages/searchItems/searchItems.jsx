import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/navbar';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button } from '@mui/material';
import './searchItems.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useEffect } from 'react';
export default function ShowItems() {
    const location = useLocation();
    const fetchedData = location.state ? location.state.fetchedData : [];
    const theme = useTheme();
    return (
        <div>
            <Navbar />
            <div className='mainSearchContent'>
                {Array.isArray(fetchedData) && fetchedData.map((product) => (

                    <div key={product._id} style={{ width: '50%', marginTop: '15px' }}>
                       
                        <Card sx={{ display: 'flex' }}>
                        <Link to={`/show/${product._id}`}>  
                            <CardMedia
                                component="img"
                                sx={{ width: 252 }}
                                image="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                            />
                            </Link>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h4" sx={{ textDecoration: 'none'}}>
                                    {product.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontSize: '25px' }}>
                                        {product.description}
                                    </Typography>
                                    <Typography variant="subtitle1" color="rgb(29, 58, 81)" component="div" sx={{ fontSize: '25px' }}>
                                        <CurrencyRupeeIcon style={{ fontSize: '14px', color: 'rgb(29, 58, 81)' }} />{product.price}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                      
                 </div>

                ))}
            </div>
        </div >
    )
}