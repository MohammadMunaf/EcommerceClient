import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/navbar';
export default function ShowItems() {
    const location = useLocation();
    const fetchedData = location.state ? location.state.fetchedData : [];
    return (
        <div>
            <Navbar />
            {Array.isArray(fetchedData) && fetchedData.map((product) => (
                <div key={product._id}>
                    {product.name}
                    {product.price}
                    {product._id}
                </div>
            ))}
            <Link to={`/`}>Home</Link>
        </div>
    )
}