import shoes from "../assets/shoes.png"
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, InputAdornment } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';


function ProductDetaisView (){

 

    return (
        <div className="mobile-modal-overlay">
        <div className="details-card"> 

        <InputAdornment position="end" className="details-card__icon">
            <IconButton edge="end">
                <CloseIcon/>
            </IconButton>
        </InputAdornment>
       
            <div className="details-card__image-container">
                <img src={shoes} alt={shoes} className="details-card__image" />
            </div>

            <div className="details-form-container" >
                <p className="view-price">12000 сом</p>

                <div className="view-likes-container">
                <InputAdornment id="view-heart-icon"  position="start">
                  <IconButton edge="start"  >
                    <FavoriteIcon/>
                  </IconButton>
               </InputAdornment>
                    <p className="view-text">Нравится: 1 M</p>
                </div>

                <p className="view-title">Adidas Yeezy 500</p>
                <p className="view-text">The Yeezy 500 Blush is a limited edition shoe designed by Kanye West for Adidas</p>
                <p className="view-description">Детальное описание</p>
                <p className="view-text">It features a unique design, with a chunky silhouette and a blush colorway. The shoe has a mix of suede, mesh and leather, and it's considered a highly sought-after item among shoe enthusiasts.</p>

                
            </div>

        </div>
        </div>
    )
}

export default ProductDetaisView