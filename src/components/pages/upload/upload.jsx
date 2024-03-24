import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../../Url';
export default function Upload() {
    const [formData, setformData] = useState({ Name: "", Description: "", url: "", price: "", category: "" });
    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setformData(currData => {
            return {
                ...currData,
                [changedField]: newValue,
            }
        })
    }
    const handleSubmit = (event) => {
        //event.preventDefault();
        //console.log(formData)
        Axios.post(`${baseUrl}/upload`, formData)
            .then((response) => {

            }).catch((e) => {
                console.log(`error-->${e}`);
            })
    }
    return (
        <div>
            <form>
                <label htmlFor="Name">ProductName</label>
                <input type="text" id="name"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange} />
                <label htmlFor="description">Description</label>
                <input type="text" id="description"
                    name="Description"
                    value={formData.Description}
                    onChange={handleChange} />
                <label htmlFor="url">Url</label>
                <input type="text" id="url"
                    name="url"
                    value={formData.url}
                    onChange={handleChange} />
                <label htmlFor="price">Price</label>
                <input type="number" id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange} />

                <label htmlFor="category">category</label>
                <input type="String" id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange} />
                <button onClick={handleSubmit}>Add</button>
            </form>
            <Link to='/'>Home</Link>
        </div>
    )
}