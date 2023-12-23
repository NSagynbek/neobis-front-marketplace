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
import axios from "axios";




function Profile(){

 const [username, setUsername] = useState("");
 const [name, setName] = useState("");
 const [selectedCategory, setSelectedCategory] = useState('profile');
 const [exit,setExit] = useState(false);

 


    useEffect(()=>{
       async function getUser  (){
        try{
            const response = await getProfileDetails();
            setUsername(response.username)
            setName(response.firstname)

        } catch(error){
            console.log(error.response.status)
            console.log(error.message)
        }
        

        }

         getUser()
    },[])

     


    function onSubmit(values){
        console.log(values)
    }



   
  const logOut = ()=>{
    setExit(!exit)
}
    
    return(
        <div className="profile-container">
    
            <div className="profile-details">
                <div className="user-info-container">
                    <img 
                    src={userImagePlaceholder} 
                    alt={userImagePlaceholder} 
                    onClick={()=>setSelectedCategory("profile")}
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
                onClick={()=>setSelectedCategory("lekedProducts")}
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
                onClick={()=>setSelectedCategory("myProducts")}
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
                   <NavLink id='backBtn' className="backBtn-text" name="backBtn" to="/password">Назад</NavLink>

                   <NavLink to="/password"  id='backBtn' className="backBtn-Icon">
                     <IconButton edge="start" >
                       <KeyboardBackspaceIcon/>
                     </IconButton>
                   </NavLink>
                 </label>

             <p className='profile-header-text' onClick={test}>Профиль</p>


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