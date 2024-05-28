import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './featured.css';
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
export default function Featured() {
    const [allproduct, setallproduct] = useState([]);
    const [today, setToday] = useState("");
    const fetchData = (value) => {
        Axios.get(`${baseUrl}/products?q=${value}`, {
            params: {
                _limit: 3
            }
        })
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
        <div className='featuredCollections'>
            <div className='featuredHeading' style={{ width: '100%', height: '140px', backgroundColor: 'white', marginBottom: '20px', marginTop: '20px' }}>
                <h1 style={{ paddingTop: '34px', fontSize: '55px', marginLeft: '50px' }}>Featured</h1>
            </div>
            <div className='featuredProducts'>
                <div className='featuredProductimg1'>
                    <img src="https://i.pinimg.com/originals/d6/e0/f8/d6e0f836c9cb95d18278490e31678697.png" alt="" width="490" height="490" />
                </div>
                <div className='featuredProductimg2' style={{marginBottom:'6px'}}>
                    <img src="https://content.backcountry.com/images/items/900/FSN/FSN0058/DARTN.jpg" alt="" width="302" height="302" />
                    
                </div>
                <div className='featuredProductimg3'>
                <img src="https://outbrands.cl/cdn/shop/products/ChaquetaShortLinedCruiserDarkTanFilsonOutbrands10.png?v=1713478865" alt="" width="222" height="222" />
                </div>
                <div className='imageText' style={{ fontSize: '35px',marginRight:'10px' }}><h1>Discover <br />our<br />Featured <br /> Products</h1></div>
            </div>
        </div >
    )
}


// 