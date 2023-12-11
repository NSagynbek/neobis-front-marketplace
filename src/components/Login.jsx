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

import TextError from "./TextError";

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
        theme: "colored",
        });
  }


function Login (){
    const [iconToggle,setIconToggle] = useState(false)


    function onSubmit (values){
        console.log(values)
        notify()

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
                    />
                    <ErrorMessage name="username"  component={TextError}/>

                    </div>

                    <div className="input-password">
                    <Field
                    type={iconToggle?"text":"password"}
                    id="password"
                    name="password"
                    placeholder = "Пароль"
                    />
                     <ErrorMessage name="password" component={TextError}/>
                    <InputAdornment position="end" className="mu-icon">
                        <IconButton onClick={passwordVisibility} edge="end">
                            {iconToggle?<VisibilityIcon/>:<VisibilityOffIcon/>}
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
            
            <NavLink className="signUp-link" to="/">Зарегистрироваться</NavLink>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Login