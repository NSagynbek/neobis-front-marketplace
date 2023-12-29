import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IconButton,InputAdornment} from '@mui/material';
import EditDelete from '../modalWindows/EditDelete';
import { useEffect,useState } from 'react';
import { like } from '../api';

function MyProducts({key,products}){
  const [more,setMore] = useState(false);
  const [isLiked,setIsLiked] = useState(false);
  
const image = products.images.map((el) => (el.imageUrl ? el.imageUrl : ''));

const likeProduct = async (id)=>{

  try{
    const res = await like(id)
    setIsLiked((prevIsLiked) => !prevIsLiked)

  }catch(error){
    console.log(error)
  }
  
}  

const handleClick = ()=>{
  setMore(!more)
}


return (
          <div key={key} className='my-product'>
          
            <div className='my-product__image-container'>
             
                <img 
                className='my-product__image' 
                src={image[0]} 
                alt={image[0]} 
                />
              
            </div>

            <div className='my-product__text-container'>
            <p className='my-product__title'>{products.name}</p>
            <p className='my-product__price'>{products.price} Сом</p>
            </div>

            <div className='my-product__icons-container'>
            <InputAdornment 
            id="heart-icon"  
            position="start"
            onClick={()=>likeProduct(products.id)}
            >
              <IconButton edge="start"  >
                <FavoriteIcon style={{color:isLiked?"red":""}}/>
              </IconButton >
            </InputAdornment>
                <p className='my-product__likes'>{products.likes}</p>

            <InputAdornment 
            id="more-icon"  
            position="start"
            onClick={handleClick}
            >
              <IconButton edge="start"  >
                <MoreVertIcon/>
              </IconButton>
            </InputAdornment>
            {more?<EditDelete setMore={setMore} products={products} />:""}
            </div>


        </div>
    )
}

export default MyProducts