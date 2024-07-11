import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeToCart } from "../../../actions";
import Navbar from "../../navbar/navbar";
import './cart.css';
import Quantity from "../../quantity/quantity";
import { Button } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useState ,useEffect} from "react";
export default function Cart() {
    const [total,setTotal]=useState(0);
    const products = useSelector(state => state.cart.cartItems);
    useEffect(() => {
        let calculatedTotal = 0;
        for (const product of products) {
          calculatedTotal += product.price;
        }
        setTotal(calculatedTotal);
    }, [products]);
    const dispatch = useDispatch();
    const handleRemove = (product) => {
        dispatch(removeToCart(product))
        const val=product.price;
        setTotal(total-val);
    }
    return (
        <div>
            <Navbar />
            <div className="cartHeading">
                <h1 style={{color:'rgb(29, 58, 81)'}}>Shopping Cart</h1>
            </div>
            {Array.isArray(products) && products.map(product => (
                <div key={product.id} className="cartbox" style={{ height: '155px',width:'100%' }}>
                    <div className="imge" style={{ width: '13%' }}>
                        <img src={product.image} alt="" height="125em" style={{ marginTop: '4px' }} />
                    </div>
                    <div className="itemDetails" style={{ width: '20%' }}>
                        <h1 style={{ fontFamily: 'inherit' ,color:'rgb(29, 58, 81)'}}>{product.name}</h1>
                    </div>
                    <span className='quantity' style={{ width: '20%' }}>
                        <p style={{ paddingRight: '15px', fontSize: '20px', }}>Quantity</p><Quantity />
                    </span>
                    <div style={{ width: '10%' }}>
                        <Button onClick={() => handleRemove(product)} style={{ backgroundColor: 'rgb(29, 58, 81)', color: 'white', borderRadius: '0', width: '90%', height: '37px' }}>remove</Button>
                    </div>
                    <div className="itemPrice" style={{ width: '20%',fontSize: '30px' }}>
                    <h3 style={{ margin: '0',color:'rgb(29, 58, 81)' }}><CurrencyRupeeIcon style={{ fontSize: '25px' }} />{product.price}</h3>
                    </div>
                </div>
            ))}
            <div className="cartTotal">
                <h3 style={{marginRight:'30px'}}>Total:  {total}</h3>
            </div>
        </div>
    );
}
