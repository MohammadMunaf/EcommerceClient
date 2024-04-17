import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, Navigate } from 'react-router-dom';
import './productList.css'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ManIcon from '@mui/icons-material/Man';
import Woman2Icon from '@mui/icons-material/Woman2';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import Checkbox from '@mui/material/Checkbox';
import { baseUrl } from '../../../Url';
import Footer from '../../footer/footer';
import Navbar from '../../navbar/navbar';
export default function ProductList() {
    const navigate = useNavigate();
    const [checked, setChecked] = useState("false");
    const [allproduct, setallproduct] = useState([]);
    const [alldata, setallData] = useState([]);
    const fetchData = (value) => {
        Axios.get(`${baseUrl}/products?q=${value}`)
            .then((response) => {
                setallproduct(response.data);
                setallData(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.error(`error-->${e}`);
            });
    }
    useEffect(() => {
        fetchData("All");
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
    const updateButtonValue = (category) => {
        fetchData(category);
        setChecked("true");
    }
    const arrangeData = (val) => {
        let product = [];
        switch (val) {
            case "a":
                //less then 500  .
                product = alldata.filter((p) => p.price < 500);
                // console.log(product);
                break;
            case "b":
                //499-999
                product = alldata.filter((p) => p.price > 500 && p.price < 1000);
                // console.log(product);
                break;
            case "c":
                //1000-1599
                product = alldata.filter((p) => p.price > 1000 && p.price < 1599);
                // console.log(product);
                break;
            case "d":
                //1500-1999 
                product = alldata.filter((p) => p.price > 1500 && p.price < 1999);
                // console.log(product);
                break;
            case "e":
                //above 2000   
                product = alldata.filter((p) => p.price > 2000);
                // console.log(product);
                break;
             default:
                break;   
        }
        setallproduct(product);
    }
    const changeOrder = (val) => {
        let product = [...allproduct];
        product.sort((a, b) => a.price - b.price);
        setallproduct(product);
    }
    const gotHome=()=>{
        navigate('/');
    }
    return (
        <div>
            <Navbar/>
        <div className='collections'>
            <div className='sideBar'>
                <div className='catogory1' style={{ textAlign: "left" }}>
                    <h3>Catogeries</h3>
                    <button onClick={() => updateButtonValue("Men")} ><ManIcon style={{ marginBottom: '-5px', width: '2em' }} />Men</button>
                    <button onClick={() => updateButtonValue("Women")} ><Woman2Icon style={{ marginBottom: '-5px', width: '2em' }} />Women</button>
                    <button onClick={() => updateButtonValue("Children")} >< EscalatorWarningIcon style={{ marginBottom: '-5px', width: '2em' }} />Children</button>
                    <button onClick={() => updateButtonValue("Shirt")} ><CandlestickChartIcon style={{ marginBottom: '-5px', width: '2em' }} />Shirt</button>
                    <button onClick={() => updateButtonValue("Tshirt")} ><BubbleChartIcon style={{ marginBottom: '-5px', width: '2em' }} />Tshirt</button>
                </div>
                <div className='catogory2' style={{ marginTop: '20px', textAlign: "left" }}>
                    <h3>Filter By Price</h3>
                    <button onClick={() => arrangeData("a")} ><label><Checkbox />less then 500</label></button>
                    <button onClick={() => arrangeData("b")} ><label><Checkbox />499-999</label></button>
                    <button onClick={() => arrangeData("c")} ><label><Checkbox />1000-1599</label></button>
                    <button onClick={() => arrangeData("d")} ><label><Checkbox />1500-1999</label></button>
                    <button onClick={() => arrangeData("e")} ><label><Checkbox />above 2000</label></button>
                </div>
                <div className='catogory2' style={{ marginTop: '20px', textAlign: "left" }}>
                    <h3>Filter By Ratting</h3>
                    <button onClick={() => arrangeData("a")} ><label><Checkbox />2</label></button>
                    <button onClick={() => arrangeData("b")} ><label><Checkbox />3</label></button>
                    <button onClick={() => arrangeData("c")} ><label><Checkbox />4</label></button>
                    <button onClick={() => arrangeData("d")} ><label><Checkbox />5</label></button>
                </div>
            </div>
            <div className='productList'>
                <div>
                    <h2 >Products List</h2>
                    <Button onClick={() => changeOrder("price")}>sort price</Button>
                    <Button onClick={() => changeOrder("date")}>recent</Button>
                    <Button onClick={()=>gotHome()}>Home</Button>
                </div>
                {allproduct.map((product) => (
                    <Card sx={{ maxWidth: 345 }} className='product' key={product._id}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=800"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography> */}
                            <Typography variant="body2" color="text.secondary">
                                {product.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.category}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><Link to={`/show/${product._id}`}>View</Link></Button>
                            <Button onClick={() => handleDelete(product._id)}>Delete</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
        <Footer/>
        </div>
    )
}