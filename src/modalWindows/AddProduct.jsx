import { useState } from "react";
import add from "../assets/add.png"
import {Formik, Form, Field,ErrorMessage} from "formik"
import * as yup from "yup"
import TextError from "../components/TextError";
import { values } from "lodash";


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
    file:null
}

function AddProduct(){

   
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.currentTarget.files[0]);
      };




    const handleSubmit =  (values,actions) => {
        const formData = new FormData();

        selectedFile.forEach((file, index) => {
            formData.append(`images[${index}]`, file);
          });

          formData.append('price', values.price);
          formData.append('title', values.title);
          formData.append('shortDescription', values.shortDescription);
          formData.append('fullDescription', values.fullDescription);
          formData.append('file', selectedFile);
          
      
        console.log(formData)

        actions.resetForm();
      };

 
    return (
        <div className="mobile-modal-overlay">

            <div className="add-product-card">

                

                <Formik
                 initialValues={initialValues}
                 validationSchema={validationSchema}
                 onSubmit={handleSubmit}
                >
                    {formikProps=>(
                        <Form className="add-form">

    
           <div>
            <label htmlFor="file">Upload File:</label>
            <Field
              type="file"
              id="file"
              name="file"
              onChange={(event) => {
                formikProps.setFieldValue("file", event.currentTarget.files[0]);
                handleFileChange(event);
              }}
            />
            <ErrorMessage name="file" component="div" className="error" />
          </div>
      





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