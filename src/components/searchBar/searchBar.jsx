import { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { baseUrl } from '../../Url';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
                width: '37ch',
            },
        },
    },
}));


export default function SearchBar() {
    const [product, setproduct] = useState([]);
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        Axios.get(`${baseUrl}/search?q=${input}`)
            .then((response) => {
                //setproduct(response.data);
                navigate('/searchItems', { state: { fetchedData: response.data } });
                // console.log(response.data);
            }).catch((e) => {
                console.log(`error-->${e}`);
            })
            
    }
    const handleChange = (e) => {
        setInput(e.target.value);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleChange}
                    />
                </Search>
            </form>
            {/* {product.length > 0 && <ShowItems product={product} />} */}
        </div>
    )
}


