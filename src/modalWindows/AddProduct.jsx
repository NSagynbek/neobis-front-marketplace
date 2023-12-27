import { useState } from "react";
import add from "../assets/add.png"
import {Formik, Form, Field,ErrorMessage} from "formik"
import * as yup from "yup"
import TextError from "../components/TextError";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton,InputAdornment} from '@mui/material';
import { addProduct,addProductImages } from "../api";
import axios from "axios";

const validationSchema = yup.object({
    price: yup.string().required("пожалуйста, укажите цену"),
    name: yup.string().required("пожалуйста, укажите названия"),
    shortDescription: yup.string().required("пожалуйста, напишите краткое описание"),
    fullDescription: yup.string().required("напишите пожалуйста полное описание"),
})



const initialValues = {
    price:"",
    name:"",
    shortDescription:"",
    fullDescription:"",
}

function AddProduct({handleClick}){

   
const [fieldValue, setFieldValue] = useState(null)


async function handleSubmit  (values){
 const formData = new FormData();
 formData.append('price', values.price);
 formData.append('name', values.name);
 formData.append('shortDescription', values.shortDescription);
 formData.append('fullDescription', values.fullDescription);

 if(!fieldValue){
  console.log("file not selected!")
  return 
 }
 const imagesFormData = new FormData();
 imagesFormData.append("file",fieldValue);
 

try{
  const response = await addProduct(formData);
  console.log(response)
 
  let id = 1
  const res = await addProductImages(id,imagesFormData)
  console.log(res)
} catch(error){
  console.log(error)
}
 



}



const closeWindow = ()=>{
  handleClick()
}

 
    return (
        <div className="mobile-modal-overlay">

            <div className="add-product-card">

            <InputAdornment 
              position="end" 
              className="add-product-card-close-icon"
              onClick={closeWindow}
              >
            <IconButton edge="end"  >
                <CloseIcon  />
            </IconButton>
            </InputAdornment>
     

             <label htmlFor="file-upload" className="file-upload">
              <img src={add} alt={add} className="file-upload-icon"  />
                <input  
                hidden             
                name="file"
                type="file"
                id="file-upload"
                onChange={(e)=>{setFieldValue(e.target.files[0])}}
                />
                <div className="image-container">
                
                {fieldValue&&(
                  <img
                  src={URL.createObjectURL(fieldValue)}
                  alt={`Uploaded ${fieldValue.name}`} 
                />
                )} 

                 
                </div>

             </label>

                <Formik
                 initialValues={initialValues}
                 validationSchema={validationSchema}
                 onSubmit={handleSubmit}
                >
                    {formikProps=>(
                        <Form className="add-form">
  

                            <Field
                            type="text"
                            name="price"
                            placeholder="Цена"
                            className="prise-field"
                            />
                            <ErrorMessage name="price" component={TextError}/>

                            <Field
                            type="text"
                            name="name"
                            placeholder="Название"
                            className="title-field"
                            />

                            <ErrorMessage name="name" component={TextError}/>

                            <Field
                            as="textarea"
                            name="shortDescription"
                            placeholder="Краткое описание"
                            rows={2}
                            className="description-field"
                            />
                            <ErrorMessage name="shortDescription" component={TextError}/>

                            <Field
                            as="textarea"
                            name="fullDescription"
                            placeholder="Полное описание"
                            rows={3}
                            className="features-field"
                            />

                            <ErrorMessage name="fullDescription" component={TextError}/>

                            <button 
                               type="submit"
                               className={`add-btn ${formikProps.dirty&&formikProps.isValid?"add-btn-active":""}`}
                               disabled={!formikProps.dirty&&!formikProps.isValid}
                             >
                             Добавить</button>
                        </Form>

                    )}

                </Formik>
                
                
                </div>


                

            </div>


     
    )
}

export default AddProduct