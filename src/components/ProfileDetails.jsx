import {Formik,Form,Field} from "formik"
import avatar from "../assets/avatar.png"
import { useState,useEffect } from "react"
import Mobilemodal from "../modalWindows/Mobilemodal";
import Codemodal from "../modalWindows/Codemodal";
import { useSelector} from "react-redux"
import { getProfileDetails,updateUserDetails } from "../api";




const initialValues = {
    name:"",
    lastname:"",
    birthDate:"",
    email:"",
}


function ProfileDetails (){
    
const [initialFormValues, setInitialFormValues] = useState(initialValues);
const [fieldValue, setFieldValue] = useState(null)

useEffect(()=>{
    const getUserProfileDetails = async ()=>{
        try{
            const res = await getProfileDetails()
            const userData = res.data;
            setInitialFormValues(userData);
        }catch(error){
            console.log(error)
        }
        
    }
    getUserProfileDetails()
},[])

const [number,setNumber] = useState(false);
const [editMode, setEditMode] = useState(false)
const smsCode = useSelector(state => state.smsCode)


   async function onSubmit(values){
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('lastname', values.lastname);
    formData.append('birthDate', values.birthDate);
    formData.append('email', values.email);
    formData.append('avatarImage', fieldValue);
        const res = await updateUserDetails(formData)
        console.log(formData)        

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
                initialValues={initialValues}
                onSubmit={onSubmit}
                >
                    {(formikProps)=>(
                        <Form className="profile-form-form">
                            <div className="field-section-one">
                                {editMode?(
                                    <>
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
                            name="name"
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
                            name="birthDate"
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