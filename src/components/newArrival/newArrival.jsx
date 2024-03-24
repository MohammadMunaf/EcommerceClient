import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './newArrival.css';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';


import { Button, CardActionArea, CardActions } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function NewArrival() {
    const [checked, setChecked] = useState("false");
    const [allproduct, setallproduct] = useState([]);
    const [alldata, setallData] = useState([]);
    const fetchData = (value) => {
        Axios.get(`http://localhost:3001/products?q=${value}`)
            .then((response) => {
                setallproduct(response.data);
                setallData(response.data);
            })
            .catch((e) => {
                console.error(`error-->${e}`);
            });
    }
    useEffect(() => {
        fetchData("All");
    }, []);

    const handleDelete = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`)
            .then((response) => {
                //console.log(response.data);
                fetchData("All");
            }).catch((e) => {
                console.log(`error-->${e}`);
            })
    }
    return (
        <div className='collections'>
            <div className='products' style={{ width: '', height: "" }}>
                {Array.isArray(allproduct) && allproduct.map(product => (
                    <Card sx={{ minWidth: '350px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://images.pexels.com/photos/10877346/pexels-photo-10877346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary"><Link to={`/show/${product._id}`}>View</Link></Button>
                            <Button size="small" color="primary" onClick={() => handleDelete(product._id)}>Delete</Button>

                        </CardActions>
                    </Card>

                ))}

            </div>

        </div >
    )
}
