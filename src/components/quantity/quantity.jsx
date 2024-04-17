import { useState } from "react"
import './quantity.css';
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
export default function Quantity(){
    const [val,setVal]=useState(1);
    const increment=(value)=>{
        let q=value;
        q=q+1;
        setVal(q);
    }
    const decrement=(value)=>{
        if(value>1){
            let q=value;
            q=q-1;
            setVal(q);
        }
    }
    return(
        <div className="box" style={{width:'200px',height:'35px'}}>
            <Button onClick={()=>decrement(val)} style={{padding:'0',height:'100%',borderRadius: '0',color:'black',borderRight:'0.2px solid black',width:'15px'}}><RemoveIcon/></Button>
            <p style={{width:'60%',textAlign:'center',fontWeight:'bold',fontSize:'20px'}}>{val}</p>
            <Button onClick={()=>increment(val)} style={{padding:'0',height:'100%',borderRadius: '0',color:'black',borderLeft:'0.2px solid black',width:'15px'}}><AddIcon/></Button>
        </div>
    )
}