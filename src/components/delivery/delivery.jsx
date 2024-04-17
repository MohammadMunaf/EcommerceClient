import './delivery.css';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BarChartIcon from '@mui/icons-material/BarChart';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
export default function Delivery() {
    return (
        <div className="FooterContainer">
            <div className="block">
                <LocalShippingIcon style={{fontSize:'45px'}}/>
                <div style={{width:'50%',marginLeft:'25px'}}>
                    <h3>Free Delivery</h3>
                    <p>This free shipping only for selected region</p>
                </div>

            </div>
            <div className="block">
                <PaymentIcon style={{fontSize:'45px'}}/>
                <div style={{width:'50%',marginLeft:'25px'}}>
                    <h3>Payment method</h3>
                    <p>This free shipping only for selected region</p>
                </div>
            </div>
            <div className="block">
                <BarChartIcon style={{fontSize:'45px'}}/>
                <div style={{width:'50%',marginLeft:'25px'}}>
                    <h3>Warranty</h3>
                    <p>This free shipping only for selected region</p>
                </div>

            </div>
            <div className="block">
                <SupportAgentIcon style={{fontSize:'45px'}}/>
                <div style={{width:'50%',marginLeft:'25px'}}>
                    <h3>Customer Service</h3>
                    <p>This free shipping only for selected region</p>
                </div>

            </div>
        </div>
    )
}