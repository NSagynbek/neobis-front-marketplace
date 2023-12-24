import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import photoBackground from "../assets/PhotoBackground.png"
import frame from "../assets/Frame.png"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IconButton, InputAdornment } from '@mui/material';
import { useState } from "react";
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as yup from "yup"
import {NavLink} from "react-router-dom"
import { signup } from '../api';
import { useNavigate } from 'react-router-dom';

import TextError from "./TextError";
import PasswordTextError from './PasswordTextError';

const initialValues ={
    password:"",
    secondPassword:"",
}

const notify = (type,msg)=>{
    switch(type){
        case "success":
            toast.success(msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });

            break;

        case "error":
            toast.error(msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });

            break;    
    }
    
  }


  


const validationSchema = yup.object({
    password: yup
    .string()
    .required('введите свой пароль ')
    .min(8, 'От 8 до 15 символов') 
    .matches(/[a-z]/, 'Иметь Строчные') 
    .matches(/[A-Z]/, 'Иметь прописные буквы') 
    .matches(/[0-9]/, 'Минимум 1 цифра') 
    .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, 'Содержит минимум 1 спецсимвол (!, ", #, $...)'),
  secondPassword: yup
    .string()
    .required('повторите свой пароль ')
    .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
})





function Password (){
    const navigate = useNavigate()
    const [iconToggle,setIconToggle] = useState(false)
    const usernamePassword = useSelector(state => state.usernamePassword)


   async function onSubmit (values){
        const formdata = {
            username:usernamePassword.username,
            email:usernamePassword.email,
            password:values.password,           
        }

        try{
            const response = await signup(formdata)
            console.log(response)
            notify("success",response)
            setTimeout(() => {
                navigate("/");
              },3000);

        }catch(error){
            console.log(error.response.data.message)
            notify("error",error.response.data.message+" "+"пожалуйста, попробуйте еще раз с другим адресом электронной почты")
            setTimeout(() => {
                navigate("/signup");
              },9000);
            
        }

        
      

    }

    function passwordVisibility(){
        setIconToggle(!iconToggle);
    }

    

    return (
        <div className="login">

            <div className="login__image-container">
                <img src={photoBackground} alt={photoBackground} className="login__image" />
            </div>
  <div className='password-form-container'>
            <Formik
             initialValues={initialValues}
             validationSchema={validationSchema}
             onSubmit={onSubmit}
            >
                {(formikProps)=>(
                    <Form className='password-form'>

            <div className='password-form__header'>

                <label htmlFor="backBtn" className='backBtn-label'>
                    <NavLink id='backBtn' className="backBtn-text" name="backBtn" to="/signup">Назад</NavLink>

                    <NavLink to="/signup"  id='backBtn' className="backBtn-Icon">
                       <IconButton edge="start" >
                        <KeyboardBackspaceIcon/>
                      </IconButton>
                    </NavLink>
                </label>

                <p className='password-form__header-text'>Регистрация</p>

                <InputAdornment position="end" className="mu-password-icon">
                        <IconButton onClick={passwordVisibility} edge="end">
                            {iconToggle?(
                            <VisibilityIcon style={{ color:formikProps.dirty&&formikProps.isValid?"#5458EA":"" }}
                            />
                            ):(<VisibilityOffIcon 
                            style={{ color:formikProps.dirty&&formikProps.isValid?"#5458EA":"" }}
                            />)}
                        </IconButton>
                    </InputAdornment>

            </div>

            <div className='password-form__info'>
                <img src={frame} alt={frame} />
                <p className='password-form__info-title'>Придумайте пароль</p>
                <p className='password-form__info-text'>Минимальная длина — 8 символов. Для надежности пароль должен содержать буквы и цифры.</p>
            </div>

                  <div className="input-username">
                        <Field
                        id="passwordComponent"
                        type={iconToggle?"text":"password"}
                        placeholder="введите свой пароль"
                        name="password"
                        className={iconToggle?"error":""}
                        />
                        <ErrorMessage  name="password"  component={PasswordTextError}/>
                    </div>

                   <div className="input-password">
                        <Field
                        id="passwordComponent-secondary"
                        type={iconToggle?"text":"password"}
                        placeholder="Повторите пароль"
                        name="secondPassword"
                        className={iconToggle?"error":""}
                        />
                        <ErrorMessage  name="secondPassword"  component={PasswordTextError}/>
                    </div>

                    <div className='password-form__btn-container'>
                    <button
                     type="submit" 
                     className={`loginBtn ${formikProps.dirty&&formikProps.isValid?"loginBtn-valid":""}`}
                     disabled={!formikProps.dirty&&!formikProps.isValid}
                    
                     >
                    Далее</button>
                    </div>
                        
                    </Form>
                )}

            </Formik>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Password