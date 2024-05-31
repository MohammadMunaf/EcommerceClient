import Axios from 'axios';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../../Url';
import TextField from '@mui/material/TextField';
import './upload.css';
import Button from '@mui/material/Button';
import Navbar from '../../navbar/navbar';


export default function Upload() {
    const [formData, setformData] = useState({
        Name: "",
        Description: "",
        images: [],
        price: "",
        category: ""
    });
    const fileInputRef = useRef(null);
    const handleChange = (evt) => {
        const { name, value, files } = evt.target;
        if (name === 'images') {
            setformData(currData => ({
                ...currData,
                images: Array.from(files)
            }));
        }
        else {
            setformData(currData => ({
                ...currData,
                [name]: value,
            }))
        }
    }
    const handleSubmit = async (event) => {
        const formPayload = new FormData();
        formPayload.append('Name', formData.Name);
        formPayload.append('Description', formData.Description);
        for (let i = 0; i < formData.images.length; i++) {
            formPayload.append('images', formData.images[i]);
        }
        formPayload.append('price', formData.price);
        formPayload.append('category', formData.category);

        Axios.post(`${baseUrl}/upload`, formPayload, {
            headers: {
                'Content-Type': 'multipart/form-data', // This is handled automatically by Axios and FormData
                "Custom-Header": "value",
            }
        })
            .then((response) => {
                console.log("upload successfully");
                setformData({
                    Name: "",
                    Description: "",
                    images: [],
                    price: "",
                    category: "",
                })
                if (fileInputRef.current) {
                    fileInputRef.current.value = ''; // Clear the file input
                }
            }).catch((e) => {
                console.log(`error-->${e}`);
            })
    }
    return (
        <div className='uploadForm'>
            <Navbar />
            <div className='formBox'>
                <form className='uploadFormBox' encType='multipart/form-data'>
                    <h2 style={{ textAlign: 'center', color: 'rgb(29, 58, 81)' }}>Upload New Product</h2>
                    <div>
                        <TextField id="Name" name="Name" value={formData.Name}
                            onChange={handleChange} label="Product Title" variant="outlined" size="small" style={{ width: '100%' }} />
                    </div>
                    <div>
                        <TextField id="Description" name="Description" value={formData.Description}
                            onChange={handleChange} label="Description" variant="outlined" size="small" style={{ width: '100%', marginTop: '10px' }} />
                    </div>
                    <div>
                        <input type="file" name='images' multiple onChange={handleChange} ref={fileInputRef}/>
                        {/* <TextField id="url" name="url" value={formData.url}
                            onChange={handleChange} label="Image Url" variant="outlined" size="small" style={{ width: '100%', marginTop: '10px' }} /> */}
                    </div>
                    <div className='priceBox'>
                        <div>
                            <TextField id="price" name="price" value={formData.price}
                                onChange={handleChange} label="price" variant="outlined" size="small" style={{ width: '99%', marginTop: '10px' }} />
                        </div>
                        <div>
                            <TextField id="category" name="category" value={formData.category}
                                onChange={handleChange} label="category" variant="outlined" size="small" style={{ width: '100%', marginTop: '10px' }} />
                        </div>
                    </div>
                    <Button onClick={handleSubmit} style={{ width: '100%', backgroundColor: 'green', color: 'white' }}>Add</Button>
                </form>
            </div>
        </div>
    )
}