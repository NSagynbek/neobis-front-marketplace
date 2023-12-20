import userImagePlaceholder from "../assets/userImagePlaceholder.png"
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import MyProducts from "./MyProducts"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from "../modalWindows/AddProduct";


const notify = ()=>{
    toast.success('Товар добавлен!', {
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

    notify()

    const products = Array.from({ length: 50 }, (_, index) => <MyProducts key={index} />);

    return (
        <div className="main-page-container">
            <AddProduct/>

            <header className="main-header">
                <div className="main-header__image-container">
                    <img src={logo} alt={logo} />
                </div>

                <button className="main-header__btn">Подать обьявление</button>

                <div className="main-user">
                    <div className="main-user-detais">
                        <NavLink to="/profile" className="main-header__link">
                        <p className="user-info__name">Name</p>
                        <p className="user-info__username" >username</p>
                        </NavLink>
                    </div>
                    <div className="main-user__image">
                        <NavLink to="/profile" className="main-header__link">
                        <img src={userImagePlaceholder} alt={userImagePlaceholder} />
                        </NavLink>
                    </div>
                </div>

            </header>

            <div className="content-container">
           {products}               

            </div>
            <ToastContainer/>
        </div>
    )
}

export default MainPage