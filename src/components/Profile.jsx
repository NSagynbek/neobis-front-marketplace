import { NavLink } from "react-router-dom"
import {Formik,Form,Field} from "formik"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {IconButton,InputAdornment} from '@mui/material';
import userImagePlaceholder from "../assets/userImagePlaceholder.png"
import heart from "../assets/heart.png"
import shop from "../assets/shop.png"
import exit from "../assets/exit.png"
import avatar from "../assets/avatar.png"
import Mobilemodal from "../modalWindows/Mobilemodal";
import { useState } from "react";


const initialValues = {
    name:"",
    lastname:"",
    birthDate:"",
    mobile:"",
    email:"",
}

function Profile(){

    const [addMobile,setMobile]=useState(false);

    function onSubmit(values){
        console.log(values)
    }

    function handleClick(){
        setMobile(!addMobile)
    }

    return(
        <div className="profile-container">
         {addMobile?<Mobilemodal handleClick={handleClick}/>:null}
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
                    <InputAdornment id="first-icon" className="profile-icons">
                    <IconButton edge="start"  >
                       <ArrowForwardIosIcon/>
                     </IconButton>
                     </InputAdornment>
                     
                </div>
                <div className="products">
                    <img src={shop} alt={shop} className="products__img" />
                    <p className="profile-texts">Мои товары</p>
                    <InputAdornment className="profile-icons">
                    <IconButton edge="end"  >
                       <ArrowForwardIosIcon/>
                     </IconButton>
                     </InputAdornment>
                </div>

                <div className="profile-exit">
                    <img src={exit} alt={exit} className="profile-exit__icon" />
                    <NavLink className="profile-exit__btn">Выйти</NavLink>
                    <InputAdornment className="profile-icons">
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

            <div className="avatar">
                <img src={avatar} alt={avatar} className="avatar__img" />
                <button className="avatar__upload-btn">Выбрать фотографию</button>
            </div>

            <div className="profile-form">
                <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                >
                    {(formikProps)=>(
                        <Form className="profile-form-form">
                            <div className="field-section-one">
                            <Field
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Имя"
                            />

                            <Field
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Фамилия"
                            />

                             <Field
                            type="text"
                            name="birthDate"
                            id="birthDate"
                            placeholder="Дата рождения"
                            />

                            </div>

                            <div className="field-section-one">

                            <div className="mobile">
                                <button 
                                className="mobile__btn"
                                onClick={handleClick}
                                >
                                    Добавить номер</button>
                                <p className="mobile__text">0(000) 000 000</p>

                            </div>

                         

                            <Field
                            type="text"
                            name="email"
                            id="email"
                            placeholder="почта"
                            />

                           </div>

                        </Form>

                    )}
                    
                </Formik>

            </div>

            </div>

        </div>
    )
}


export default Profile