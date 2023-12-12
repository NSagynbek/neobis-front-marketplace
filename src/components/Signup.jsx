import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import photoBackground from "../assets/PhotoBackground.png"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IconButton, InputAdornment } from '@mui/material';
import { useState } from "react";
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as yup from "yup"
import {NavLink} from "react-router-dom"

import TextError from "./TextError";

const initialValues ={
    username:"",
    email:"",
}

const validationSchema = yup.object({
    username: yup.string().required("пожалуйста, введите имя пользователя"),
    email: yup.string().email("Неверный формат").required("пожалуйста, введите вашу почту")
})


const notify = ()=>{
    toast.error('Данный пользователь уже зарегистрирован!', {
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


function Signup (){
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

            <div className='formik__header'>

                <label htmlFor="backBtn" className='backBtn-label'>
                    <NavLink id='backBtn' className="backBtn-text" name="backBtn" to="/">Назад</NavLink>

                    <NavLink to="/"  id='backBtn' className="backBtn-Icon">
                      <IconButton edge="start" >
                        <KeyboardBackspaceIcon/>
                      </IconButton>
                  </NavLink>
               </label>

            <p className='formik__header__text'>Регистрация</p>

            </div>

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
                    name="email"
                    placeholder = "Почта"
                    className={iconToggle?"error":""}
                    />
                     <ErrorMessage name="email" component={TextError}/>
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
                    Далее</button>

                </Form>
                )}
            </Formik>
            
           
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Signup