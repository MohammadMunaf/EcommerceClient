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
        Axios.get(`${baseUrl}/products?q=${value}`,{params:{_limit:10}})
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
        console.log(today);
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
                <h1 style={{paddingTop:'34px',fontSize:'55px'}}>New Arrival</h1>
            </div>
            <div className='products'>
                <div className='newArrivalProduct'>
                    {Array.isArray(allproduct) && allproduct.map(product => (
                        <Card sx={{ width: 245, height: 255, boxShadow: 'none' }} className='product' key={product._id}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=800"
                            />
                            <CardContent style={{ padding: '12px' ,textAlign:'center'}}>
                                <Typography gutterBottom variant="h5" component="div" style={{margin:"0",height:'17px'}}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <h2>{product.price}</h2>
                                </Typography>
                                <Button size="small" color="primary" onClick={() => handleDelete(product._id)}>Delete</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

        </div >
    )
}

