import { Provider } from "react-redux";
import store from '/src/redux/store.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import Login from "./components/Login"
import RootLayout from "./layouts/RootLayout"
import {PrivateRoutes} from "./components/utils/PrivateRoutes"




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
      

        </Route>

        

      </Routes>

    </Router>
    </Provider>
  );
  

}

export default App
