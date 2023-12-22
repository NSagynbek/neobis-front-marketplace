import {Formik,Form,Field} from "formik"
import avatar from "../assets/avatar.png"
import { useState,useEffect } from "react"
import Mobilemodal from "../modalWindows/Mobilemodal";
import Codemodal from "../modalWindows/Codemodal";
import { useSelector} from "react-redux"
import { getProfileDetails,updateProfileDetails } from "../api";
import axios from "axios";




const initialValues = {
    firstname:"",
    lastname:"",
    birthday:"",
    email:"",
}


function ProfileDetails (){
    const [number,setNumber] = useState(false);
    const [editMode, setEditMode] = useState(false)
    const smsCode = useSelector(state => state.smsCode)
    const [formValues, setFormValues] = useState(initialValues);
    const [fieldValue, setFieldValue] = useState(null)

useEffect(()=>{
    const getUserProfileDetails = async ()=>{
        try{
            const res = await getProfileDetails()
            setFormValues({
                firstname: res.firstname || '',
                lastname: res.lastname || '',
                birthday: res.birthday || '',
                email: res.email || '',
              });
            console.log(res)
        }catch(error){
            console.log(error)
        }
        
    }
    getUserProfileDetails()
},[])




   async function onSubmit(values){
    const formData = {       
  firstname: values.firstname,
  lastname: values.lastname,
  birthday: values.birthday
    }
    try{
        console.log(formData)
        const response = await updateProfileDetails(formData)
        console.log(response)
    }catch(error){
        console.log(error)
    }              
}

const  handleClick = ()=>{
        setNumber(!number)
    }

 const toggleSaveEditMode = ()=>{
    setEditMode(!editMode)
 }   

 function handleChange (event){   
    setFieldValue(event.target.files[0]);
  }


    return(
        <div>
           {number?<Mobilemodal handleClick={handleClick}/>:""} 
           {smsCode?<Codemodal />:""} 
            
           <div className="avatar">
          <label htmlFor="avatar" className="avatar-label">
           <img
            src={fieldValue ? URL.createObjectURL(fieldValue) : avatar}
            alt={avatar}
            className="avatar__img"
            />
           <p className="avatar__upload-btn">Выбрать фотографию</p>
            <input
            type="file"
            id="avatar"
            hidden
            onChange={handleChange}
            />
         </label>
         </div>


            <div className="profile-form">
                <Formik
                initialValues={formValues}
                enableReinitialize={true}
                onSubmit={onSubmit}
                >
                    {(formikProps)=>(
                        <Form className="profile-form-form">
                            <div className="field-section-one">
                                {editMode?(
                                    <>
                            <Field
                            type="text"
                            name="firstname"
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
                            name="birthday"
                            id="birthDate"
                            placeholder="Дата рождения"
                            />

                              <Field
                            type="text"
                            name="email"
                            id="email"
                            placeholder="почта"
                            />

                            </>

                            ):(

                                <>
                                 <Field
                            type="text"
                            name="firstname"
                            id="name"
                            placeholder="Имя"
                            readOnly
                            />

                            <Field
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Фамилия"
                            readOnly
                            />

                             <Field
                            type="text"
                            name="birthday"
                            id="birthDate"
                            placeholder="Дата рождения"
                            readOnly
                            />

                              <Field
                            type="text"
                            name="email"
                            id="email"
                            placeholder="почта"
                            readOnly
                            />
                            </>
                            )}

                            </div>

                            <div className="field-section-one">                         

                            <div className="mobile">
                                <button 
                                type="submit"
                                className="mobile__btn"
                                onClick={handleClick}
                                >
                                    Добавить номер</button>
                                <p className="mobile__text">0(000) 000 000</p>

                            </div>

                           </div>

                <button 
                type={editMode?"button":"submit"} 
                className="save"
                onClick={toggleSaveEditMode}
                >
                    {editMode?"Save":"Edit"}
                    </button>
                        </Form>

                    )}
                    
                </Formik>

            </div>
        </div>
    )
}

export default ProfileDetails