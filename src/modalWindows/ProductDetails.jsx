import {Formik, Form, Field} from "formik"
import shoes from "../assets/shoes.png"
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, InputAdornment } from '@mui/material';
import { useState,useEffect } from "react";
import { updateProductDetails,getProductById  } from "../api";
import { useDispatch } from "react-redux";
import { toggleRerender } from "../redux";


function ProductDetais ({handleEdit,products}){

  console.log("From edit product",products)
  const dispatch = useDispatch();
  const [prefillData,setPrefillData] = useState("");
  const [fieldValue,setFieldValue] = useState(null) 
  console.log(prefillData)

  useEffect(()=>{
    const prefill = async ()=>{
      const res = await getProductById (products.id)
      setPrefillData(res)

    }
    prefill()
  },[])

  const initialValues = {
    price:prefillData.price||"",
    name:prefillData.name||"",
    shortDescription:prefillData.shortDescription||"",
    fullDescription:prefillData.fullDescription||"",
}

  


 
  async function onSubmit (values){

    let formData = new FormData();

    formData.append('price', values.price);
    formData.append('name', values.name);
    formData.append('shortDescription', values.shortDescription);
    formData.append('fullDescription', values.fullDescription);
    let id = products.id
    try{
      const res = await updateProductDetails(id,formData)
      dispatch(toggleRerender());
      handleEdit()
      console.log(res)
    }catch(error){
      console.log(error)
    }
    
  }

const handleClick = ()=>{
  handleEdit()
}

function handleChange (event){
  const files = (event.target.files[0]);
  setFieldValue(files);
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
  
    <img 
    src={fieldValue?URL.createObjectURL(fieldValue):products.images[0].imageUrl} 
    alt={shoes} 
    className="details-card__image" 
    />
  
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
              {prefillData&&(
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
                )}

                
            </div>

        </div>
        </div>
    )
}

export default ProductDetais