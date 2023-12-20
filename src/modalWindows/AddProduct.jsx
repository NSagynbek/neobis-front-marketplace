import { useState } from "react";
import add from "../assets/add.png"
import {Formik, Form, Field,ErrorMessage} from "formik"
import * as yup from "yup"
import TextError from "../components/TextError";
import { addProduct } from "../api";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton,InputAdornment} from '@mui/material';



const validationSchema = yup.object({
    price: yup.string().required("пожалуйста, укажите цену"),
    title: yup.string().required("пожалуйста, укажите названия"),
    shortDescription: yup.string().required("пожалуйста, напишите краткое описание"),
    fullDescription: yup.string().required("напишите пожалуйста полное описание"),
})



const initialValues = {
    price:"",
    title:"",
    shortDescription:"",
    fullDescription:"",
}

function AddProduct(){

   
const [fieldValue, setFieldValue] = useState([])


async function handleSubmit  (values){
 const formData = new FormData();
 formData.append('price', values.price);
 formData.append('title', values.title);
 formData.append('description', values.shortDescription);
 formData.append('fullDescription', values.fullDescription);
fieldValue.forEach((file, index) => {
  formData.append(`file-${index}`, file);
});

const response = await addProduct(formData);

}

function handleChange (event){
  const files = Array.from(event.target.files);
  setFieldValue((prev) => [...prev, ...files]);
}


 
    return (
        <div className="mobile-modal-overlay">

            <div className="add-product-card">

            <InputAdornment position="end" className="add-product-card-close-icon">
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
                multiple
                onChange={handleChange}
                />
                <div className="image-container">
                {fieldValue.length>0&&fieldValue.map((el,index)=>{
                  return <img
                  key={index}
                  src={URL.createObjectURL(el)}
                  alt={`Uploaded ${el.name}`} 
                />

                 })}
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
                            name="title"
                            placeholder="Название"
                            className="title-field"
                            />

                            <ErrorMessage name="title" component={TextError}/>

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