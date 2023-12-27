import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IconButton,InputAdornment} from '@mui/material';
import cardImage from "../assets/cardImage.png"
import EditDelete from '../modalWindows/EditDelete';
import { useEffect,useState } from 'react';
import { getMyItems } from '../api';
import { like } from '../api';
import { useDispatch,useSelector } from 'react-redux';
import {toggleIsLiked} from "../redux"

function MyProducts(){
  const isLiked = useSelector(state => state.isLiked)
  const dispatch = useDispatch();

  const [more,setMore] = useState(false)
  

  useEffect(()=>{
    const getMyProducts = async ()=>{
      const response = await getMyItems()
      console.log(response)
  
    }
     getMyProducts();
  
  },[])

const likeProduct = async (id)=>{
  try{
    const res = await like(id)
    console.log(res)
    dispatch(toggleIsLiked())
  }catch(error){
    console.log(error)
  }
  
}  


  const handleClick = ()=>{
    setMore(!more)
  }

let id = 2;

    return (
          <div className='my-product'>
          
            <div className='my-product__image-container'>
                <img className='my-product__image' src={cardImage} alt={cardImage} />
            </div>

            <div className='my-product__text-container'>
            <p className='my-product__title'>BMW M4 Coupe: A Two-Door</p>
            <p className='my-product__price'>23 000 $</p>
            </div>

            <div className='my-product__icons-container'>
            <InputAdornment 
            id="heart-icon"  
            position="start"
            onClick={()=>likeProduct(id)}
            >
              <IconButton edge="start"  >
                <FavoriteIcon style={{color:isLiked?"red":""}}/>
              </IconButton >
            </InputAdornment>
                <p className='my-product__likes'>100</p>

            <InputAdornment 
            id="more-icon"  
            position="start"
            onClick={handleClick}
            >
              <IconButton edge="start"  >
                <MoreVertIcon/>
              </IconButton>
            </InputAdornment>
            {more?<EditDelete setMore={setMore} />:""}
            </div>


        </div>
    )
}

export default MyProducts