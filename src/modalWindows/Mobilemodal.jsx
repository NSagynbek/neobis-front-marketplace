import phone from "../assets/phone.png"
import {Formik,Form,Field,ErrorMessage} from "formik"
import CloseIcon from '@mui/icons-material/Close';
import { IconButton,InputAdornment } from "@mui/material";
import * as yup from "yup"
import {useDispatch } from "react-redux"
import { toggleSms } from "../redux";
import { addPhoneNumber } from "../api";



const initialValues = {
    number:"",
}

const validationSchema = yup.object().shape({
    number: yup
      .string()
      .matches(/^\+?\d{2}\d{8,10}$/, 'Неверный формат мобильного номера')
      .test('has-plus-sign', 'Должен содержать символ "+"', (value) => {
        return value && value.startsWith('+');
      })
      .test('correct-length', 'Должен содержать от 10 до 12 цифр после символа "+"', (value) => {
        const phoneNumber = value && value.replace(/\D/g, '');
        return phoneNumber && phoneNumber.length >= 10 && phoneNumber.length <= 12;
      }),
  });


function Mobilemodal ({handleClick}){

   const dispatch = useDispatch()

    async function onSubmit (values){
        let user = localStorage.getItem("username");
        const formData = {
            phoneNumber:values.number,
            username: user,
        }
        handleClick()
        dispatch(toggleSms())
        try{
            const response = await addPhoneNumber(formData)
            localStorage.setItem("phoneNumber",formData.phoneNumber)
        }catch(error){
            console.log(error)
        }
       
    }

    const closeWindow = ()=>{
        handleClick()
    }

    return (
        <div className="mobile-modal-overlay">

            <div className="mobile-modal">
            <InputAdornment
            position="end"
            className="mobile-modal__close"
            onClick={closeWindow}
            >
            <IconButton edge="end">
                <CloseIcon/>
            </IconButton>
        </InputAdornment>
            <p className="mobile-modal__heading">Изменить номер телефона</p>

            <div className="mobile-modal__content">
            <img className="mobile-modal__icom" src={phone} alt={phone} />
            <p className="mobile-modal__title">Введите номер телефона</p>
            <p className="mobile-modal__text">Мы отправим вам СМС с кодом подтверждения</p>
            <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            >
                {(formikProps)=>(
                    <Form className="mobile-form">
                        <Field
                        type="text"
                        name="number"
                        id="number"
                        placeholder="+(000) 000 000 000"
                        />
                    <ErrorMessage name="number"/>
                        <button
                        type="submit"
                        className={`mobile-form-submit-btn ${formikProps.dirty&&formikProps.isValid?"mobile-form-submit-btn-active":""}`}
                        disabled = {!formikProps.dirty&&!formikProps.isValid}
                        >
                        Далее
                        </button>
                    </Form>
                )}

            </Formik>

            </div>

            </div>

        </div>
    )
}

export default Mobilemodal