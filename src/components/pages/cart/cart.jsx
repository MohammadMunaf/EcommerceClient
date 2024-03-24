import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeToCart } from "../../../actions";
import Navbar from "../../navbar/navbar";
export default function Cart() {
    const products = useSelector(state => state.cart.cartItems);
    const dispatch=useDispatch();
    const handleRemove=(product)=>{
        dispatch(removeToCart(product))
    }
    return (
        <div>
            <Navbar/>
            <h1>Cart</h1>
            {Array.isArray(products) && products.map(product => (
                <div key={product.id}>
                    {product.name}
                    {product.price}
                    <button onClick={()=>handleRemove(product)}>remove</button>
                </div>
            ))}
              <button><Link to='/'>Home</Link></button>
        </div>
    );
}
