import SearchBar from '../searchBar/searchBar';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import FingerprintRoundedIcon from '@mui/icons-material/FingerprintRounded';
import RoofingRoundedIcon from '@mui/icons-material/RoofingRounded';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { useSelector } from "react-redux";
import { Link} from 'react-router-dom';


let products=[];
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 13,
        top: 2,
        border: `2px solid ${theme.palette.background.paper}`,
        fontSize: 10,

    },
}));

export default function Navbar() {
    products = useSelector(state => state.cart.cartItems);
    const navigate = useNavigate();
    const handleCart = () => {
        navigate('/cart');
    }
    return (
        <div className='navbar'>
            <Button><Link to='/'><RoofingRoundedIcon /></Link></Button>
            <SearchBar />
            <div>
                <IconButton onClick={() => handleCart()} aria-label="cart">
                    <StyledBadge badgeContent={products.length} color="secondary">
                        <ShoppingCartRoundedIcon />
                    </StyledBadge>
                </IconButton>
                <Button href=""><FingerprintRoundedIcon /></Button>
            </div>
        </div>
    )
}