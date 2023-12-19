import { NavLink } from "react-router-dom"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {IconButton,InputAdornment} from '@mui/material';
import userImagePlaceholder from "../assets/userImagePlaceholder.png"
import heart from "../assets/heart.png"
import shop from "../assets/shop.png"
import exit from "../assets/exit.png"
import Mobilemodal from "../modalWindows/Mobilemodal";
import Codemodal from "../modalWindows/Codemodal";
import ProfileDetails from "./ProfileDetaile";
import {useEffect} from "react";
import {authinticatedUser,logOutRequest} from "../api";
import MyProducts from "./MyProducts";
import ProductDetais from "../modalWindows/ProductDetails";
import Exit from "../modalWindows/Exit";





function Profile(){

 
    
    

    useEffect(()=>{
       async function getUser  (){
        try{
            const response = await authinticatedUser();
            return response.data
        } catch(error){
            console.log(error)
        }
        

        }

        // getUser()
    },[])

     


    function onSubmit(values){
        console.log(values)
    }



   
  async  function logOut (){
    const response = await logOutRequest()
    navigate("/")

    }
    
    return(
        <div className="profile-container">
    
            <div className="profile-details">
                <div className="user-info-container">
                    <img src={userImagePlaceholder} alt={userImagePlaceholder} />
                    <div className="user-info">
                    <p className="user-info__name">Name</p>
                    <p className="user-info__username">Username</p>
                    </div>
                    
                </div>

                <div className="liked-products">
                    <img src={heart} alt={heart} className="liked-products__img" />
                    <p className="profile-texts">Понравившиеся</p>
                    <InputAdornment id="first-icon" className="profile-icons" position="start">
                    <IconButton edge="start"  >
                       <ArrowForwardIosIcon/>
                     </IconButton>
                     </InputAdornment>
                     
                </div>
                <div className="products">
                    <img src={shop} alt={shop} className="products__img" />
                    <p className="profile-texts">Мои товары</p>
                    <InputAdornment className="profile-icons" position="start">
                    <IconButton edge="end"  >
                       <ArrowForwardIosIcon/>
                     </IconButton>
                     </InputAdornment>
                </div>

                <div className="profile-exit">
                    <img src={exit} alt={exit} className="profile-exit__icon" />
                    <NavLink 
                    className="profile-exit__btn"
                    onClick={logOut}
                    >Выйти</NavLink>
                    <InputAdornment className="profile-icons" position="start">
                    <IconButton edge="end" >
                       <ArrowForwardIosIcon/>
                     </IconButton>
                     </InputAdornment>
                </div>



            </div>

            <div className="profile-form-container">

            <div className='password-form__header'>

                 <label htmlFor="backBtn" className='backBtn-label'>
                   <NavLink id='backBtn' className="backBtn-text" name="backBtn" to="/password">Назад</NavLink>

                   <NavLink to="/password"  id='backBtn' className="backBtn-Icon">
                     <IconButton edge="start" >
                       <KeyboardBackspaceIcon/>
                     </IconButton>
                   </NavLink>
                 </label>

             <p className='profile-header-text'>Профиль</p>


            </div>

            <div className="my-products-container">
             {/* <ProfileDetails/> */}
                 {/* <MyProducts/>  */}
                 {/* <ProductDetais/> */}
                 <Exit/>

            </div>

      

            </div>

            

        </div>
    )
}


export default Profile