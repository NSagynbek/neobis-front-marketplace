import {IconButton,InputAdornment} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import ProductDetails from "./ProductDetails"
import Delete from "./Delete"


function EditDelete({setMore,products}){

const [deleteProduct,setDeleteProduct] = useState(false);
const [editProduct,setEditProduct] = useState(false);

const handleDelete =  ()=>{
  setDeleteProduct(!deleteProduct);
}  

const handleEdit =  ()=>{
  setEditProduct(!editProduct);
}



    return (
        <div className='edit-delete-card'>
           
          <label  
          htmlFor="edit-icon" 
          className='edit-container'
          onClick={handleEdit}  >
            <InputAdornment 
            id="edit-icon"  
            position="start"           
            >
              <IconButton edge="start"  >
                <BorderColorIcon style={{color:"#FFFFFF", background:"#5D5FEF", padding:"2px", borderRadius:"6px"}}/>
              </IconButton>
            </InputAdornment>
                <p  className='edit-text' id="edit-icon" >Изменить</p>
                </label>
            

           <label 
           htmlFor="delete-icon" 
           className='delete-container' 
           onClick={handleDelete}>
            <InputAdornment 
            id="delete-icon"  
            position="start"           
            >
              <IconButton edge="start"  >
                <DeleteIcon style={{color:"#FFFFFF", background:"#5D5FEF", padding:"2px", borderRadius:"6px"}}/>
              </IconButton>
            </InputAdornment>
                <p  className='delete-text' id='delete-icon'>Удалить</p>
          </label>
                 {deleteProduct?<Delete handleDelete={handleDelete} products={products}/>:""} 
                 {editProduct?<ProductDetails handleEdit={handleEdit} products={products} />:""} 
        </div>
    )
}

export default EditDelete