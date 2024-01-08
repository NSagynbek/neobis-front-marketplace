Neobis Front Marketplace  
Overview  
The Neobis Front Marketplace is a React application developed using Vite for fast bundling, Axios for handling HTTP requests with interceptors, Formik and Yup for user registration, Redux for state management,   and React private routes for secure navigation. The project focuses on enabling users to perform various actions within a marketplace environment, connecting to a backend server developed by Java teammates.  
![mainPage](https://github.com/NSagynbek/neobis-front-marketplace/assets/130668892/df3c42e7-8562-41c7-9ab4-d563e218e68a)
Features  
User Authentication  
Full registration flow using Formik and Yup for sign-up and login.  
Access and refresh token-based authorization mechanism using Axios interceptors.  
![login](https://github.com/NSagynbek/neobis-front-marketplace/assets/130668892/505c8eef-4b1c-4d2e-af3b-d5ead2e7f9f2)
Product Management  
Ability to add, edit, delete, view, and favorite products.  
Detailed view of product information, including uploaded images.  
Upload and save product images on the server.  
![addProduct](https://github.com/NSagynbek/neobis-front-marketplace/assets/130668892/0fd10ccd-a78f-4949-bd4d-d9174af5d453)
Profile Management  
Update user details including name, lastname, and mobile phone with SMS verification.  
Ability to upload and save profile images.  
Tech Stack  
Frontend: React, Vite, Formik, Yup, Redux, React Router.  
HTTP requests: Axios with interceptors and debounce for dynamic requests.  
Authentication: Access and refresh token strategy.  
Backend: Connected to a Java-developed backend server.  
Setup  
To run the project locally:  

Clone this repository.  
Install dependencies using npm install.  
Start the development server with npm run dev.    
Usage  
Upon starting the application, users can:  

Register or log in using the provided forms.  
Navigate through the marketplace to view, add, edit, delete, and favorite products.  
View detailed product information including uploaded images.  
Manage profile details, including image uploads and updates to name, last name, and mobile phone with SMS verification.  
Utilize debounce for dynamic HTTP requests, optimizing performance.  
Contribution  
For contributions or enhancements, create a pull request following the established guidelines. Issues and suggestions can be raised through the issue tracker.  

Credits  
Developers: Nursultan.  
Backend Development: Java Developer Azamat  
