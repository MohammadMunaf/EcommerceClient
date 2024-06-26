import CopyrightIcon from '@mui/icons-material/Copyright';
import './footer.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
export default function Footer() {
    return (
        <div className='footerContent'>
            <div className='copyRight'>
                <CopyrightIcon/><h5>Developed And Maintained By Mohammad Munaf</h5>
                <Button><Link to={'upload'}>addItem</Link></Button>
            </div>
        </div>
    )
}



{/* <Button><Link to={'ProductList'}>ProductList</Link></Button> */}