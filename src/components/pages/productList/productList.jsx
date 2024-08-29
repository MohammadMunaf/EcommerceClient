import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './productList.css'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ManIcon from '@mui/icons-material/Man';

import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import Checkbox from '@mui/material/Checkbox';
import { baseUrl } from '../../../Url';
import Footer from '../../footer/footer';
import Navbar from '../../navbar/navbar';
import WebhookIcon from '@mui/icons-material/Webhook';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import StarIcon from '@mui/icons-material/Star';
export default function ProductList() {
    const navigate = useNavigate();
    const [buttonClick, setButtonClick] = useState({
        click: '0',
        button: "",
    });
    const [mp, setmp] = useState(new Map([
        ["Shirts", { BackgroundColor: 'white', Color: 'rgb(82, 81, 81)' }],
        ["Jeans", { BackgroundColor: 'white', Color: 'rgb(82, 81, 81)' }],
        ["Boots", { BackgroundColor: 'white', Color: 'rgb(82, 81, 81)' }],
        ["Shirt", { BackgroundColor: 'white', Color: 'rgb(82, 81, 81)' }],
        ["Tshirt", { BackgroundColor: 'white', Color: 'rgb(82, 81, 81)' }],
    ]));

    const [allproduct, setallproduct] = useState([]);
    const [alldata, setallData] = useState([]);
    const [Arrangedata, setArrangeData] = useState("");
    const fetchData = (value) => {
        Axios.get(`${baseUrl}/products?q=${value}`)
            .then((response) => {
                setallproduct(response.data);
                setallData(response.data);
                //console.log(response.data);
            })
            .catch((e) => {
                console.error(`error-->${e}`);
            });
    }
    useEffect(() => {
        fetchData("All");
        window.scrollTo(0, 0);
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
        let prevButton = buttonClick.button;
        if (prevButton === category) {
            setmp(
                mp.set(category, { BackgroundColor: 'white', Color: 'rgb(82, 81, 81)' })
            )
            setButtonClick(
                { click: '0', button: "" }
            )
            fetchData("All");
        } else {
            fetchData(category);
            if (buttonClick.click === '0') {
                setmp(
                    mp.set(category, { BackgroundColor: 'rgb(29, 58, 81)', Color: 'white' })
                )
                setButtonClick(
                    { click: '1', button: category }
                )
            } else {
                setmp(
                    mp.set(category, { BackgroundColor: 'rgb(29, 58, 81)', Color: 'white' })
                )
                setmp(
                    mp.set(prevButton, { BackgroundColor: 'white', Color: 'rgb(82, 81, 81)' })
                )
                setButtonClick(
                    { click: '1', button: category }
                )
            }
        }

    }
    const arrangeData = (val) => {
        let product = [];
        if (Arrangedata === val) {
            setArrangeData("");
            product = alldata;
        }
        else {
            setArrangeData(val);

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
        }
        setallproduct(product);
    }
    const changeOrder = (val) => {
        let product = [...allproduct];
        product.sort((a, b) => a.price - b.price);
        setallproduct(product);
    }
    const gotHome = () => {
        navigate('/');
    }
    return (
        <div>
            <Navbar />
            <div className='collections'>
                <div className='collectionContent'>
                    <div className='sideBar'>
                        <div className='catogory1' style={{ textAlign: "left" }}>
                            <h2 style={{ fontSize: '30px' }}>Catogeries</h2>
                            <button
                                onClick={() => updateButtonValue("Shirts")}
                                style={{
                                    backgroundColor: mp.get("Shirts").BackgroundColor,
                                    color: mp.get("Shirts").Color
                                }}
                            >
                                
                                <ManIcon style={{ marginBottom: '-5px', width: '2em' }} />
                                Shirts
                            </button>
                            <button
                                onClick={() => updateButtonValue("Jeans")}
                                style={{
                                    backgroundColor: mp.get("Jeans").BackgroundColor,
                                    color: mp.get("Jeans").Color
                                }}
                            >
                                <WebhookIcon style={{ marginBottom: '-5px', width: '2em' }} />
                                Jeans
                            </button>
                            <button
                                onClick={() => updateButtonValue("Boots")}
                                style={{ backgroundColor: mp.get("Boots").BackgroundColor, color: mp.get("Boots").Color }}
                            >
                                <SnowshoeingIcon style={{ marginBottom: '-5px', width: '2em' }} />
                                Boots
                            </button>
                            <button
                                onClick={() => updateButtonValue("Shirt")}
                                style={{ backgroundColor: mp.get("Shirt").BackgroundColor, color: mp.get("Shirt").Color }}
                            >
                                <CandlestickChartIcon style={{ marginBottom: '-5px', width: '2em' }} />
                                Shirt
                            </button>
                            <button
                                onClick={() => updateButtonValue("Tshirt")}
                                style={{ backgroundColor: mp.get("Tshirt").BackgroundColor, color: mp.get("Tshirt").Color }}>
                                <BubbleChartIcon style={{ marginBottom: '-5px', width: '2em' }} />
                                Tshirt
                            </button>
                        </div>
                        <div className='catogory2' style={{ marginTop: '20px', textAlign: "left" }}>
                            <h2 style={{ fontSize: '26px' }}>Filter By Price</h2>
                            <button onClick={() => arrangeData("a")} id='500'><label><Checkbox for='500' checked={Arrangedata === "a"} />less then 500</label></button>
                            <button onClick={() => arrangeData("b")} id='999'><label><Checkbox for='999' checked={Arrangedata === "b"} />499-999</label></button>
                            <button onClick={() => arrangeData("c")} id='1599'><label><Checkbox for='1599' checked={Arrangedata === "c"} />1000-1599</label></button>
                            <button onClick={() => arrangeData("d")} id='1999'><label><Checkbox for='1999' checked={Arrangedata === "d"} />1500-1999</label></button>
                            <button onClick={() => arrangeData("e")} id='2000'><label><Checkbox for='2000' checked={Arrangedata === "e"} />above 2000</label></button>
                        </div>
                        <div className='catogory2' style={{ marginTop: '20px', textAlign: "left" }}>
                            <h2 style={{ fontSize: '26px' }}>Filter By Ratting</h2>
                            <button onClick={() => arrangeData("2")} id='2'><label><Checkbox for='2' checked={Arrangedata === "2"} />2 <StarIcon style={{ color: 'orange' ,marginBottom:'-6px'}} />
                                <StarIcon style={{ color: 'orange' ,marginBottom:'-5px'}} /></label></button>
                            <button onClick={() => arrangeData("3")} id='3'><label><Checkbox for='3' checked={Arrangedata === "3"} />3  <span><StarIcon style={{ color: 'orange',marginBottom:'-6px' }} />
                                <StarIcon style={{ color: 'orange',marginBottom:'-5px' }} />
                                <StarIcon style={{ color: 'orange',marginBottom:'-6px' }} /></span></label></button>
                            <button onClick={() => arrangeData("4")} id='4'><label><Checkbox for='4' checked={Arrangedata === "4"} />4  <span><StarIcon style={{ color: 'orange' ,marginBottom:'-6px'}} />
                                <StarIcon style={{ color: 'orange',marginBottom:'-6px' }} />
                                <StarIcon style={{ color: 'orange',marginBottom:'-6px' }} />
                                <StarIcon style={{ color: 'orange',marginBottom:'-6px' }} /></span></label></button>
                            <button onClick={() => arrangeData("5")} id='5'><label><Checkbox for='5' checked={Arrangedata === "5"} />5 <span><StarIcon style={{ color: 'orange' ,marginBottom:'-6px'}} />
                                <StarIcon style={{ color: 'orange' ,marginBottom:'-6px'}} />
                                <StarIcon style={{ color: 'orange',marginBottom:'-6px' }} />
                                <StarIcon style={{ color: 'orange',marginBottom:'-6px' }} />
                                <StarIcon style={{ color: 'orange' ,marginBottom:'-6px'}} /></span></label></button>
                        </div>
                    </div>
                    <div className='productList'>
                        <div>
                            <h2 style={{ fontSize: '26px' }}>Products List</h2>
                            <Button onClick={() => changeOrder("price")}>sort price</Button>
                            <Button onClick={() => changeOrder("date")}>recent</Button>
                            <Button onClick={() => gotHome()}>Home</Button>
                        </div>
                        {Array.isArray(allproduct) && allproduct.map(product => (
                            <Card sx={{ width: 250, height: 340, boxShadow: 'none' ,marginRight:'49px'}} className='product' key={product._id}>
                                <Link to={`/show/${product._id}`} style={{ textDecorationLine: 'none' }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="220"
                                        image={product.images[2]}
                                    />
                                    <div className="newArrivalProductDetails" style={{ color: 'GrayText', textAlign: 'center' }}>
                                        <span>
                                            <p style={{ margin: '3px', maxHeight: '18.5px' ,marginTop:'10px'}}>{product.name}</p>
                                            <h2 style={{ margin: '3px', color: 'rgb(29, 58, 81)' }}><CurrencyRupeeIcon style={{ fontSize: '15px' }} />{product.price}</h2>
                                        </span>
                                    </div>
                                </Link>
                                {/* <Button onClick={() => handleDelete(product._id)} style={{backgroundColor:'red',height:'15px',color:'white'}}>Delete</Button> */}
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}



