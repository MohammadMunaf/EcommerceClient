import './featured.css';
import { useNavigate } from 'react-router-dom';

export default function Featured() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/show/665ab63d9ca136ca098d9fe6');
    }
    return (
        <div className='featuredCollections'>

            <div className='featuredHeading' style={{ width: '100%', height: '140px', backgroundColor: 'white', marginBottom: '20px', marginTop: '20px' }}>
                <h1 style={{ paddingTop: '34px', fontSize: '55px', marginLeft: '50px' }}>Featured</h1>
            </div>

            <div className='featuredProducts' >
                <div className='featuredProductimg1'>
                    <img src="https://i.pinimg.com/originals/d6/e0/f8/d6e0f836c9cb95d18278490e31678697.png" alt="" width="490" height="490" />
                </div>
                <div className='featuredProductimg2' style={{ marginBottom: '6px' }}>
                    <img src="https://content.backcountry.com/images/items/900/FSN/FSN0058/DARTN.jpg" alt="" width="312" height="312" />

                </div>
                <div className='featuredProductimg3'>
                    <img src="https://outbrands.cl/cdn/shop/products/ChaquetaShortLinedCruiserDarkTanFilsonOutbrands10.png?v=1713478865" alt="" width="220" height="215" />
                </div>
                <div className='imageText' style={{ fontSize: '35px', marginRight: '10px' }}>
                    <h1>Discover <br />our<br />Featured <br /> Product</h1><br />
                    <button onClick={handleClick} className='imageTextButton' style={{ border: 'none', width: '170px', height: '40px', fontSize: '17px', letterSpacing: '3px' }}>visit</button>
                </div>
            </div>

        </div >
    )
}


// 