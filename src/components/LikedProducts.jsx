import FavoriteIcon from '@mui/icons-material/Favorite';
import {IconButton,InputAdornment} from '@mui/material';
import cardImage from "../assets/cardImage.png"
import { useState,useEffect } from 'react';
import ProductDetaisView from '../modalWindows/ProductDetailsView';
import { like } from '../api';
import { useDispatch } from 'react-redux';
import { toggleRemoveLikedProducts } from '../redux';

function LikedProducts({key,products}){
  console.log(products)

  const [view,setView] = useState(false);
  const [disLike, setDislike] = useState(false)
  
  const dispatch = useDispatch();

  const handleClick = async ()=>{
    setView((prev)=>!prev)
  }
 
 
  const handleDislike = async()=>{
    setDislike((prev)=>!prev);
    const res = await like(products.id)
    dispatch(toggleRemoveLikedProducts());
  }

    return (
          <div key={key} className='my-product'>
          
            <div className='my-product__image-container'>
                <img 
                className='my-product__image' 
                src={products.images[0].imageUrl} 
                alt={cardImage} 
                onClick={handleClick}
                />
            </div>

            <div className='my-product__text-container'>
            <p className='my-product__title'>{products.name}</p>
            <p className='my-product__price'>{products.price}$</p>
            </div>

            <div className='my-product__icons-container'>
            <InputAdornment 
            id="heart-icon"  
            position="start"
            onClick={handleDislike}
            >
              <IconButton edge="start"  >
                <FavoriteIcon style={{color:disLike?"":"red"}}/>
              </IconButton >
            </InputAdornment>
                <p className='my-product__likes'>{products.likes}</p>

          
               
            </div>
            {view?<ProductDetaisView handleClick={handleClick} products={products}/>:""}
            
        </div>
    )
}

export default LikedProducts