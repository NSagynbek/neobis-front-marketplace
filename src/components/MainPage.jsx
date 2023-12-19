import userImagePlaceholder from "../assets/userImagePlaceholder.png"
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import MyProducts from "./MyProducts"



function MainPage (){

    const products = Array.from({ length: 50 }, (_, index) => <MyProducts key={index} />);

    return (
        <div className="main-page-container">

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

        </div>
    )
}

export default MainPage