import { loginSuccess } from '../redux';
import {useDispatch} from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import photoBackground from "../assets/PhotoBackground.png"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment } from '@mui/material';
import { useState } from "react";
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as yup from "yup"
import {NavLink} from "react-router-dom"
import { login,setAuthToken } from '../api';

import TextError from "./TextError";
import axios from 'axios';

const initialValues ={
    username:"",
    password:"",
}

const validationSchema = yup.object({
    username: yup.string().required("пожалуйста, введите имя пользователя"),
    password: yup.string().required("пожалуйста, введите ваш пароль")
})


const notify = ()=>{
    toast.error('Неверный логин или пароль!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  }


function Login (){
    const dispatch = useDispatch();
    const [iconToggle,setIconToggle] = useState(false);


const  onSubmit = async (values)=>{
        console.log(values)
        notify()
        try{
            const response = await login(values)
            const token = response.token;
            setAuthToken(token)
            dispatch(loginSuccess())
            console.log(response)

        } catch(error){
            console.log(error)
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

            <div className="formik">

            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
                {(formikProps)=>(
                <Form className="form">  
                    <div className="input-username">
                    <Field
                    type="text"
                    id="login"
                    name="username"
                    placeholder = "Имя пользователя"
                    className={iconToggle?"error":""}
                    />
                    <ErrorMessage  name="username"  component={TextError}/>

                    </div>

                    <div className="input-password">
                    <Field
                    type={iconToggle?"text":"password"}
                    id="password"
                    name="password"
                    placeholder = "Пароль"
                    className={iconToggle?"error":""}
                    />
                     <ErrorMessage name="password" component={TextError}/>
                    <InputAdornment position="end" className="mu-icon">
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

                    <button
                     type="submit" 
                     className={`loginBtn ${formikProps.dirty&&formikProps.isValid?"loginBtn-valid":""}`}
                     disabled={!formikProps.dirty&&!formikProps.isValid}
                    
                     >
                    Войти</button>

                </Form>
                )}
            </Formik>
            
            <NavLink className="signUp-link" to="/signup">Зарегистрироваться</NavLink>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Login