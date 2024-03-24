import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from '../../navbar/navbar';
import { addToCart } from '../../../actions';
import { useDispatch } from 'react-redux';
import { baseUrl } from '../../../Url';



const Show = () => {
    const { userId } = useParams();
    const [product, setProduct] = useState([]);
    const dispatch=useDispatch();
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await Axios.get(`${baseUrl}/show/${userId}`);
                setProduct(response.data);
            } catch (error) {
                console.error(`Error fetching product: ${error}`);
            }
        };
        fetchProduct(); 
    }, [userId]); 

    const handleCart = (product) => {
        dispatch(addToCart(product));
    }
    return (
        <div>
            <Navbar />
            <h1>Show Page</h1>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price:{product.price}</p>
            <button onClick={() => handleCart(product)}>Add to Cart</button>
            <button >Buy Now</button>
            <button><Link to='/'>Home</Link></button>
        </div>
    );
};

export default Show;