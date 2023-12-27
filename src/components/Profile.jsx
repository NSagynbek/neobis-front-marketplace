import { NavLink } from "react-router-dom"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {IconButton,InputAdornment} from '@mui/material';
import userImagePlaceholder from "../assets/userImagePlaceholder.png"
import heart from "../assets/heart.png"
import shop from "../assets/shop.png"
import Exitt from "../assets/exit.png"
import Codemodal from "../modalWindows/Codemodal";
import {useEffect, useState} from "react";
import {getProfileDetails} from "../api";
import MyProducts from "./MyProducts";
import Exit from "../modalWindows/Exit";
import ProfileDetails from "./ProfileDetails";
import LikedProducts from "./LikedProducts"
import { getMyItems,getLikedItems } from "../api";




function Profile(){

 const [username, setUsername] = useState("");
 const [name, setName] = useState("");
 const [userImage,setUserImage] = useState(null);
 const [selectedCategory, setSelectedCategory] = useState('profile');
 const [exit,setExit] = useState(false);

 


    useEffect(()=>{
       async function getUser  (){
        try{
            const response = await getProfileDetails();
            setUsername(response.username)
            setName(response.firstname)
            setUserImage(response.imageUrl)

        } catch(error){
            console.log(error.response.status)
            console.log(error.message)
        }
        

        }

         getUser()
    },[])

     
const getMyProducts = async ()=>{
  setSelectedCategory("myProducts")
  const response = await getMyItems()
  console.log(response)
  
}

const getMyLikedProducts = async ()=>{
  setSelectedCategory("lekedProducts")
  const response = await getLikedItems()
  console.log(response)
}


   
  const logOut = ()=>{
    setExit(!exit)
}
    
    return(
        <div className="profile-container">
    
            <div className="profile-details">
                <div className="user-info-container">
                    <img 
                    src={userImage?userImage:userImagePlaceholder} 
                    alt={userImagePlaceholder} 
                    onClick={()=>setSelectedCategory("profile")}
                    className="user-info-container__img"
                    />
                    <div className="user-info">
                    <p className="user-info__name"
                    onClick={()=>setSelectedCategory("profile")}
                    >{name}</p>
                    <p className="user-info__username"
                    onClick={()=>setSelectedCategory("profile")}
                    >{username}</p>
                    </div>
                    
                </div>

                <div className="liked-products" 
                onClick={getMyLikedProducts}
                >
                    <img src={heart} alt={heart} className="liked-products__img" />
                    <p className="profile-texts">Понравившиеся </p>         
                    <InputAdornment id="first-icon" className="profile-icons" position="start">
                    <IconButton edge="start"  >
                       <ArrowForwardIosIcon/>
                     </IconButton>
                     </InputAdornment>
                     
                </div>
                <div className="products"
                onClick={getMyProducts}
                >
                    <img src={shop} alt={shop} className="products__img" />
                    <p className="profile-texts">Мои товары</p>                   
                    <InputAdornment className="profile-icons" position="start">
                    <IconButton edge="end"  >
                       <ArrowForwardIosIcon/>
                     </IconButton>
                     </InputAdornment>
                </div>

                <div className="profile-exit"
                onClick={logOut}
                >
                    <img src={Exitt} alt={Exitt} className="profile-exit__icon" />
                    <NavLink 
                    className="profile-exit__btn"
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
                   <NavLink id='backBtn' className="backBtn-text" name="backBtn" to="/main">Назад</NavLink>

                   <NavLink to="/main"  id='backBtn' className="backBtn-Icon">
                     <IconButton edge="start" >
                       <KeyboardBackspaceIcon/>
                     </IconButton>
                   </NavLink>
                 </label>

             
            
              {selectedCategory === 'profile' && <p className='profile-header-text'>Профиль</p>}
              {selectedCategory === 'myProducts' && <p className='profile-header-text'>Мои товары</p>}
              {selectedCategory === 'lekedProducts' && <p className='profile-header-text'>Понравившиеся</p>}

            </div>

            <div className="my-products-container">
              

              {selectedCategory === 'profile' && <ProfileDetails/>}
              {selectedCategory === 'myProducts' && <MyProducts/>}
              {selectedCategory === 'lekedProducts' && <LikedProducts />}
               {exit?<Exit logOut={logOut} />:""}
            </div>

      

            </div>

            

        </div>
    )
}


export default Profile