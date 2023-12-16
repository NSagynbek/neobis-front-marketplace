import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IconButton,InputAdornment} from '@mui/material';
import cardImage from "../assets/cardImage.png"
import EditDelete from '../modalWindows/EditDelete';






function MyProducts(){





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
            <InputAdornment id="heart-icon"  position="start">
              <IconButton edge="start"  >
                <FavoriteIcon/>
              </IconButton>
            </InputAdornment>
                <p className='my-product__likes'>100</p>

            <InputAdornment id="more-icon"  position="start">
              <IconButton edge="start"  >
                <MoreVertIcon/>
              </IconButton>
            </InputAdornment>
            <EditDelete/> 
            </div>


        </div>
    )
}

export default MyProducts