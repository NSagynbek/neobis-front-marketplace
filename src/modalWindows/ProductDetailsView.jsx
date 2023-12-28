import shoes from "../assets/shoes.png"
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, InputAdornment } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect,useState } from "react";
import { getProductById } from "../api";

function ProductDetaisView ({products,handleClick}){
    const [details,setDetails] = useState("")
    
 useEffect(()=>{
    const getProduct = async ()=>{
        const res = await getProductById(products.id)
        console.log(res)
        setDetails(res)
    }
    getProduct()

 },[])

const closeWindow = ()=>{
    handleClick()
}

    return (
        <div className="mobile-modal-overlayy">
        <div className="details-card"> 

        <InputAdornment 
        position="end" 
        className="details-card__icon"
        onClick={closeWindow}
        >
            <IconButton edge="end">
                <CloseIcon/>
            </IconButton>
        </InputAdornment>
       
            <div className="details-card__image-container">
                <img src={shoes} alt={shoes} className="details-card__image" />
            </div>

            <div className="details-form-container" >
                <p className="view-price">{details.price} сом</p>

                <div className="view-likes-container">
                <InputAdornment 
                id="view-heart-icon"  
                position="start"
                >
                  <IconButton edge="start"  >
                    <FavoriteIcon/>
                  </IconButton>
               </InputAdornment>
                    <p className="view-text">Нравится:{details.likes}</p>
                </div>

                <p className="view-title">{details.name}</p>
                <p className="view-text">{details.shortDescription}</p>
                <p className="view-description">Детальное описание</p>
                <p className="view-text">{details.fullDescription}</p>

                
            </div>

        </div>
        </div>
    )
}

export default ProductDetaisView