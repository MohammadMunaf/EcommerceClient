import axios from "axios";
import {useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom"
import { baseUrl } from "../../../Url";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function EditPage(){
    let location=useLocation();
    const id=location.state?location.state.id:"Invalid";

    const [editData,setEditData]=useState({
        id:"",
        Name:"",
        Description:"",
        images: [],
        price:"",
        category:""
    })
    useEffect(()=>{
        axios.get(`${baseUrl}/edit/${id}`)
            .then((res)=>{
                setEditData({
                    id: res.data.id || "",
                    Name: res.data.name || "",
                    Description: res.data.description || "",
                    images: res.data.images || [],
                    price: res.data.price || "",
                    category: res.data.category || ""
                })
            })
            .catch((e)=>{
                console.log(`Error-->${e}`);
            })
    },[])
   
    const fileInputRef = useRef(null);
    const handleChange=(evt)=>{
        const { name, value, files } = evt.target;
        if (name === 'images') {
            setEditData(currData => ({
                ...currData,
                images: Array.from(files)
            }));
        }
        else {
            setEditData(currData => ({
                ...currData,
                [name]: value,
            }))
        }
    }
    const handleSubmit=()=>{
        axios.patch(`${baseUrl}/edit/${id}`,editData)
            .then((res)=>{
                setEditData({
                    id: res.data.id || "",
                    Name: res.data.name || "",
                    Description: res.data.description || "",
                    images: res.data.images || [],
                    price: res.data.price || "",
                    category: res.data.category || ""
                })
            })
            .catch((e)=>{
                console.log(`Error-->${e}`);
            })
    }
    return (
        <>
        <h1>Edit page</h1>
        <div className='editFormBox' style={{width:'30%'}}>
                <form className='editFormBox' encType='multipart/form-data'>
                    <h2 style={{ textAlign: 'center', color: 'rgb(29, 58, 81)' }}>edit Product</h2>
                    <div>
                        <TextField id="Name" name="Name" value={editData.Name}
                            onChange={handleChange} label="Product Title" variant="outlined" size="small" style={{ width: '100%' }} />
                    </div>
                    <div>
                        <TextField id="Description" name="Description" value={editData.Description}
                            onChange={handleChange} label="Description" variant="outlined" size="small" style={{ width: '100%', marginTop: '10px' }} />
                    </div>
                    <div>
                        <input type="file" name='images' multiple onChange={handleChange} ref={fileInputRef}/>
                        {/* <TextField id="url" name="url" value={formData.url}
                            onChange={handleChange} label="Image Url" variant="outlined" size="small" style={{ width: '100%', marginTop: '10px' }} /> */}
                    </div>
                    <div className='priceBox'>
                        <div>
                            <TextField id="price" name="price" value={editData.price}
                                onChange={handleChange} label="price" variant="outlined" size="small" style={{ width: '99%', marginTop: '10px' }} />
                        </div>
                        <div>
                            <TextField id="category" name="category" value={editData.category}
                                onChange={handleChange} label="category" variant="outlined" size="small" style={{ width: '100%', marginTop: '10px' }} />
                        </div>
                    </div>
                    <Button onClick={handleSubmit} style={{ width: '100%', backgroundColor: 'green', color: 'white' }}>Edit</Button>
                </form>
            </div>
        </>
    )
}