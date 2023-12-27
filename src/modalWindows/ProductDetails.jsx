import {Formik, Form, Field} from "formik"
import shoes from "../assets/shoes.png"
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, InputAdornment } from '@mui/material';
import { useState,useEffect } from "react";
import instance from "../api/axiosConfig";
import convertBase64 from "../components/utils";

const initialValues = {
    price:"",
    name:"",
    shortDescription:"",
    fullDescription:"",
}

function ProductDetais ({handleEdit}){

const [fieldValue,setFieldValue] = useState([])   
 
async function onSubmit (values){
  let formData = new FormData();
  formData.append('price', values.price);
  formData.append('name', values.name);
  formData.append('shortDescription', values.shortDescription);
  formData.append('fullDescription', values.fullDescription);
  formData.append('images',fieldValue);
  for (let pair of formData) {
    console.log(pair[0], pair[1]);
  }
 
  try{
    const res = await instance.put(`api/v1/products/updateProduct/${1}`,formData)
    console.log(res)
  }catch(error){
    console.log(error)
  }
  
}

const handleClick = ()=>{
  handleEdit()
}

function handleChange (event){
  const files = Array.from(event.target.files);
  setFieldValue((prev) => [...prev, ...files]);
}

  



    return (
        <div className="mobile-modal-overlay">
        <div className="details-card"> 

        <InputAdornment 
        position="end" 
        className="details-card__icon"
        onClick={handleClick}
        >
            <IconButton edge="end">
                <CloseIcon/>
            </IconButton>
        </InputAdornment>
       
            <div className="details-card__image-container">
            <label htmlFor="edit-product-image">
  {fieldValue.length > 0 ? (
    fieldValue.map((el, index) => (
      <img
        key={index}
        src={URL.createObjectURL(el)}
        alt={`Uploaded ${el.name}`} 
        className="details-card__image"
      />
    ))
  ) : (
    <img src={shoes} alt={shoes} className="details-card__image" />
  )}
  <input 
    type="file"
    id="edit-product-image"
    hidden
    onChange={handleChange}
    multiple
  />
</label>

            </div>

            <div >
                <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                >

                   {formikProps=>(
                    <Form className="details-form-container">
                        <Field
                        type="text"
                        name="price"
                        placeholder="Price"
                        className="prise-field"
                        />

                         <Field
                        type="text"
                        name="name"
                        placeholder="Product title"
                        className="title-field"
                        />

                        <Field
                        as="textarea"
                        name="shortDescription"
                        placeholder="Product description"
                        className="description-field"
                        rows={2}
                        />

                        <Field
                        as="textarea"
                        name="fullDescription"
                        placeholder="Product features"
                        className="features-field"
                        rows={3}
                        />

                       <button type="submit" 
                       className="product-form-btn"
                       > Сохранить</button>
                    </Form>

                   )}

                </Formik>

                
            </div>

        </div>
        </div>
    )
}

export default ProductDetais