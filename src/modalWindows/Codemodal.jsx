import placeholder from "../assets/placeholder.png"
import { useState,useEffect } from "react"
import PuffLoader from "react-spinners/ClipLoader";
import debounce from "lodash/debounce";
import {useDispatch } from "react-redux"
import { toggleSms } from "../redux";
import { codeConfirmation } from "../api";


const override ={
    display: "block",
    margin: "0 auto",
    borderColor: "gray",
  };


const initialValues ={
    code:"",
}



function Codemodal(){

  const dispatch = useDispatch();

    const [completed,setCompleted] =useState(false);
    const [seconds,setSeconds]=useState(60);
    const [loading, setLoading] = useState(true);
    const [codeValue, setCodeValue] = useState("");

  useEffect(()=>{
    const timer = setInterval(()=>{
        setSeconds(prevSeconds =>prevSeconds-1)
    },1000)

    if(seconds===0){
        clearInterval(timer)
        setCompleted(true)
        setLoading(false)
    }

    return () => clearInterval(timer);

  },[seconds])

  const sendRequestDebounced = debounce((code) => {
    
    if (code.length === 4) {
        const codeConfirmAsync = async ()=>{
          const response = await codeConfirmation()
        }
         dispatch(toggleSms())
      }
   
  }, 1000);

  const handleCodeChange = (event) => {
    const { value } = event.target;
    setCodeValue(value);
    sendRequestDebounced(value); 
};

    function onSubmit (values){
        console.log(values)
        setSeconds(60)
        setCompleted(false)
        setLoading(true)
        

    }
    return (
        <div className="mobile-modal-overlay">
            <div className="code-modal">
                <p className="code-modal__heading">Изменить номер телефона</p>
                <div className="code-modal__img-container">
                <img src={placeholder} alt={placeholder} />
                </div>
                <p className="code-modal__title">Введите код из СМС</p>
              
                   
                          <input 
                             type="text"
                             placeholder="0000"
                             className="code-modal__input"
                             name="code"
                             onChange={handleCodeChange} 
                        />

                 <div className="send-again-container">
                    
                 <button 
                 type="submit" 
                 className={completed?"send-again-container-btn-active":"send-again-container-btn"}
                 disabled={!completed}
                 onClick={onSubmit}
                 >
                    Отправить код еще раз</button> 
                    <div className="loader">
                    <PuffLoader
                      color={"gray"}
                      loading={loading}
                      cssOverride={override}
                      size={15}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                    {completed?"":<p className="seconds">00.{seconds}</p>}
                    </div>
                 
                            
                 </div>
                      
               

                
                 
               
              
            </div>


        </div>
    )
}

export default Codemodal