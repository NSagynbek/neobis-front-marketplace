import { Provider } from "react-redux";
import store from '/src/redux/store.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';


import RootLayout from "./layouts/RootLayout"
import {PrivateRoutes} from "./components/utils/PrivateRoutes"
import Login from "./components/Login"
import Signup from "./components/Signup";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Mobilemodal from "./modalWindows/Mobilemodal";
import MyProducts from "./components/MyProducts";
import Codemodal from "./modalWindows/Codemodal";
import EditDelete from "./modalWindows/EditDelete";
import ProductDetais from "./components/ProfileDetails";
import ProductDetaisView from "./modalWindows/ProductDetailsView";
import Delete from "./modalWindows/Delete";
import Exit from "./modalWindows/Exit";
import MainPage from "./components/MainPage";
import AddProduct from "./modalWindows/AddProduct";
import LikedProducts from "./components/LikedProducts";
import ProfileDetails from "./components/ProfileDetails";



function App() {
  
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
   
  }, []);

  return (
    <Provider store={store}>
    <Router>

      <Routes>
        <Route path="/" element={<RootLayout/>}>
          
      <Route element={<PrivateRoutes/>}>       
        {/* <Route path="/welcomback" element={<WelcomeBack />} />      
        <Route path="/welcom" element={<Welcom />} /> */}
      </Route>
       <Route path="/" element={<Login />} />
       <Route path="/signup" element={<Signup/>} />
       <Route path="/password" element={<Password/>} />
       <Route path="/profile" element={<Profile/>} />
       <Route path="/phone" element={<Mobilemodal/>} />
       <Route path="/code" element={<Codemodal/>} />
       <Route path="/product" element={<MyProducts/>} />
       <Route path="/edit" element={<EditDelete/>} />
       <Route path="/view" element={<ProductDetaisView/>} />
       <Route path="/delete" element={<Delete/>} />
       <Route path="/exit" element={<Exit/>} />
       <Route path="/main" element={<MainPage/>} />
       <Route path="/add" element={<AddProduct/>} />
       <Route path="/liked" element={<LikedProducts/>} />
       <Route path="/details" element={<ProfileDetails/>} />
      

        </Route>

        

      </Routes>

    </Router>
    </Provider>
  );
  

}

export default App
