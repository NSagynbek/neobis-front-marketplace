import {Formik,Form,Field} from "formik"
import avatar from "../assets/avatar.png"
import { useState } from "react"


const initialValues = {
    name:"",
    lastname:"",
    birthDate:"",
    email:"",
}


function ProfileDetails (){


    return(
        <div>
            <div className="avatar">
                <img src={avatar} alt={avatar} className="avatar__img" />
                <button className="avatar__upload-btn">Выбрать фотографию</button>
            </div>

            <div className="profile-form">
                <Formik
                initialValues={initialValues}
                // onSubmit={onSubmit}
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
                                type="submit"
                                className="mobile__btn"
                                // onClick={handleClick}
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
    )
}

export default ProfileDetails