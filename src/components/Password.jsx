import { ToastContainer, toast } from 'react-toastify';
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

import TextError from "./TextError";
import PasswordTextError from './PasswordTextError';

const initialValues ={
    password:"",
    secondPassword:"",
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
    const [iconToggle,setIconToggle] = useState(false)


    function onSubmit (values){
        console.log(values)
      

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
                <p className='password-form__info-text'>Минимальная длина — 8 символов. Для надежности пароль должен содержать буквы и цифры.</p>
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
        </div>
    )
}

export default Password