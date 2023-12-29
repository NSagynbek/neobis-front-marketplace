import userImagePlaceholder from "../assets/userImagePlaceholder.png"
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import MyProducts from "./MyProducts"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from "../modalWindows/AddProduct";
import { getProfileDetails } from "../api";
import { useEffect,useState } from "react";
import { getProducts } from "../api";
import {useSelector} from "react-redux";

const notify = (product)=>{
    toast.success(`${product} Товар добавлен!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  }




function MainPage (){

const username = localStorage.getItem("username");    
const [userDetails,setUserDetails] = useState({});
const [closeWindow,setCloseWindow] = useState(false);
const [products,setProducts]=useState([]);
const isDelete = useSelector(state => state.isDelete);


    useEffect(()=>{
        const getUserProfileDetails = async ()=>{
        try{
        const userDetails = await getProfileDetails(username)
        setUserDetails({...userDetails})
        
        const response = await getProducts()
        setProducts(response)
              
         }catch(error){
          console.log(error)
         }
            
     }
       getUserProfileDetails()
    },[isDelete])

    const handleClick = ()=>{
        setCloseWindow(!closeWindow)
    }




    return (
        <div className="main-page-container">
            {closeWindow?<AddProduct handleClick={handleClick} notify={notify}/>:""}

            <header className="main-header">
                <div className="main-header__image-container">
                    <img src={logo} alt={logo} />
                </div>

                <button 
                className="main-header__btn"
                onClick={handleClick}
                >
                    Подать обьявление
                </button>

                <div className="main-user">
                    <div className="main-user-detais">
                        <NavLink to="/profile" className="main-header__link">
                        <p className="user-info__name">{userDetails.firstname}</p>
                        <p className="user-info__username" >{userDetails.username}</p>
                        </NavLink>
                    </div>
                    <div className="main-user__image">
                        <NavLink to="/profile" className="main-header__link">
                        <img 
                        src={userDetails?userDetails.imageUrl:userImagePlaceholder} 
                        alt={userImagePlaceholder}
                        className="user-info-container__img"
                         />
                        </NavLink>
                    </div>
                </div>

            </header>

            <div className="content-container">
              {products.map((products,index)=>{
                return <MyProducts key={index} products={products}/>
              })}             

            </div>
            <ToastContainer/>
        </div>
    )
}

export default MainPage