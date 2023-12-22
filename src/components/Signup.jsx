import photoBackground from "../assets/PhotoBackground.png"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IconButton, InputAdornment } from '@mui/material';
import { useState } from "react";
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as yup from "yup"
import {NavLink} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { basket } from '../redux';
import {useDispatch } from 'react-redux';

import TextError from "./TextError";

const initialValues ={
    username:"",
    email:"",
}

const validationSchema = yup.object({
    username: yup.string().required("пожалуйста, введите имя пользователя"),
    email: yup.string().email("Неверный формат").required("пожалуйста, введите вашу почту")
})





function Signup (){

    const [errors,setErrors] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

   async function onSubmit  (values){
  
   dispatch(basket(values))
   navigate("/password")
    
          
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
                    className={errors?"error":""}
                    />
                    <ErrorMessage  name="username"  component={TextError}/>

                    </div>

                    <div className="input-password">
                    <Field
                    type="text"
                    id="password"
                    name="email"
                    placeholder = "Почта"
                    className={errors?"error":""}
                    />
                     <ErrorMessage name="email" component={TextError}/>

                 
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
            
        </div>
    )
}

export default Signup