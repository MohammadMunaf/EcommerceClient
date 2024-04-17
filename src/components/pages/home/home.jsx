import './home.css'
import Button from '@mui/material/Button';
import Footer from '../../footer/footer';
import Navbar from '../../navbar/navbar';
import { Link } from 'react-router-dom';
import ImageSlider from '../../imageSlider/imageSlider';
import ProductList from '../productList/productList';
import NewArrival from '../../newArrival/newArrival';
import Delivery from '../../delivery/delivery';
import Featured from '../../featured/featured';
export default function Home() {

    return (
        <div>
            <Navbar />
            <ImageSlider />
            <div className='collection'>
                <div className='collection1' style={{ width: '50%', marginLeft: '50px' }}>
                    <div className='row1' style={{ height: '50%' }}>
                        <Link to={'productList'}><img src="https://images.pexels.com/photos/3782784/pexels-photo-3782784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" style={{ height: '100%' }} /></Link>
                        <div className='header'><h3>Summer</h3><h1>Collections</h1></div>
                    </div>
                    <div className='row2' style={{ height: '50%', marginTop: '10px' }}>
                        <Link to={'productList'}><img src="https://images.pexels.com/photos/1805478/pexels-photo-1805478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" style={{ height: '100%' }} /></Link>
                        <div className='header'><h3>Casual</h3><h1>Collections</h1></div>
                    </div>
                </div>
                <div className='collection2' style={{ maxWidth: '50%', marginRight: '50px' }}>
                    <Link to={'productList'}><img src="https://images.pexels.com/photos/3254057/pexels-photo-3254057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" style={{ height: '100%' }} /></Link>
                    <div className='header2'><h3>Big Vibe</h3><h1>Collections</h1></div>
                </div>
            </div>
            {/* <div className='offer'>
                <div className='offer1' style={{ width: '40%', height: '100%', marginTop: '5%', marginLeft: '5%', backgroundColor: 'white' }}>
                    <div >
                        <img src="https://images.pexels.com/photos/7222947/pexels-photo-7222947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" style={{ height: '100%' }} />
                    </div>
                    <div style={{ padding: '15px' }}>A ladies’ jacket is a versatile piece of clothing that can be worn in various settings and seasons. They come in a variety of styles,
                        materials, and designs to suit different occasions and weather conditions</div>
                </div>
                <div className='offer2' style={{ width: '40%', height: '100%', marginTop: '5%', marginRight: '5%', backgroundColor: 'white' }}>
                    <div >
                        <img src="https://images.pexels.com/photos/14059773/pexels-photo-14059773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" style={{ height: '100%' }} />
                    </div>
                    <div style={{ padding: '15px' }}>A ladies’ jacket is a versatile piece of clothing that can be worn in various settings and seasons. They come in a variety of styles,
                        materials, and designs to suit different occasions and weather conditions</div>
                </div>
            </div> */}
            <Featured />
            <NewArrival />
            <Delivery />
            <Footer />
        </div>
    );
}

// { product.name }
// { product.description }
// { product.price }
// <Link to={`/show/${product._id}`}>View</Link><br />
// <button onClick={() => handleDelete(product._id)}>Delete</button>








