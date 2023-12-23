import FavoriteIcon from '@mui/icons-material/Favorite';
import {IconButton,InputAdornment} from '@mui/material';
import cardImage from "../assets/cardImage.png"
import EditDelete from '../modalWindows/EditDelete';
import { useState,useEffect } from 'react';
import { getLikedItems } from '../api';
import productDetailsView from "../modalWindows/ProductDetailsView"





function LikedProducts(){

  const [view,setView] = useState(false);

useEffect(()=>{
  const getLikedProducts = async ()=>{
    const response = await getLikedItems()
    console.log(response)

  }
  // getLikedProducts();

},[])

const handleClick = ()=>{
  setView(!view)
}


    return (
          <div className='my-product'
          onClick={handleClick}
          >
          
            <div className='my-product__image-container'>
                <img className='my-product__image' src={cardImage} alt={cardImage} />
            </div>

            <div className='my-product__text-container'>
            <p className='my-product__title'>BMW M4 Coupe: A Two-Door</p>
            <p className='my-product__price'>23 000 $</p>
            </div>

            <div className='my-product__icons-container'>
            <InputAdornment id="heart-icon"  position="start">
              <IconButton edge="start"  >
                <FavoriteIcon/>
              </IconButton>
            </InputAdornment>
                <p className='my-product__likes'>100</p>

          
                {view?<productDetailsView/>:""}
            </div>

      
        </div>
    )
}

export default LikedProducts