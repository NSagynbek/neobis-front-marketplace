import {Formik, Form, Field} from "formik"
import shoes from "../assets/shoes.png"
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, InputAdornment } from '@mui/material';
import { useState,useEffect } from "react";

const initialValues = {
    price:"",
    title:"",
    description:"",
    features:"",
}

function ProductDetais ({handleEdit}){

    

  function onSubmit(values){
    console.log(values)
  }

  const handleClick = ()=>{
    handleEdit()
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
                <img src={shoes} alt={shoes} className="details-card__image" />
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
                        name="title"
                        placeholder="Product title"
                        className="title-field"
                        />

                        <Field
                        as="textarea"
                        name="description"
                        placeholder="Product description"
                        className="description-field"
                        rows={2}
                        />

                        <Field
                        as="textarea"
                        name="features"
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