import './home.css'
import Footer from '../../footer/footer';
import Navbar from '../../navbar/navbar';
import { Link } from 'react-router-dom';
import ImageSlider from '../../imageSlider/imageSlider';
import NewArrival from '../../newArrival/newArrival';
import Delivery from '../../delivery/delivery';
import Featured from '../../featured/featured';
import { useEffect } from 'react';
export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <Navbar />
            <ImageSlider />
            <div className='collection'>
                <div className='collection1' style={{ width: '49%', marginLeft: '50px' }}>
                    <div className='row1' style={{ height: '50%' }}>
                        <Link to={'ProductList'}><img src="https://cdn.shopify.com/s/files/1/0070/1922/products/instock_m_q422_MaritimeShirtJacket-PikePlaid_003.jpg" alt="" style={{ height: '100%',width:'100%' }} /></Link>
                        <div className='header'><h3>Summer</h3><h1>Collections</h1></div>
                    </div>
                    <div className='row2' style={{ height: '50%', marginTop: '10px' }}>
                        <Link to={'ProductList'}><img src="https://cdn.shopify.com/s/files/1/0003/2725/4068/products/mens_murphy_sweater_shirt_bridgewater_buffalo_jackson_800x.jpg" alt="" style={{ height: '98%',width:'100%' }} /></Link>
                        <div className='header'><h3>Casual</h3><h1>Collections</h1></div>
                    </div>
                </div>
                <div className='collection2' style={{ maxWidth: '49%', marginRight: '50px',borderLeft:'10px white solid' }}>
                    <Link to={'ProductList'}><img src="https://i.ebayimg.com/images/g/v84AAOSwCGFhv~ty/s-l1600.jpg" alt="" style={{ height: '100%',width:'100%' }} /></Link>
                    <div className='header2'><h3>Big Vibe</h3><h1>Collections</h1>
                    </div> 
                    <div className='header3'>  Stay comfortable, stay stylish, stay you</div>
                </div>
            </div>
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


<Link to={'ProductList'} style={{textDecorationLine:'none'}}>Visit All</Link>








