Neobis Front Marketplace
Overview
The Neobis Front Marketplace is a React application developed using Vite for fast bundling, Axios for handling HTTP requests with interceptors, Formik and Yup for user registration, Redux for state management, and React private routes for secure navigation. The project focuses on enabling users to perform various actions within a marketplace environment, connecting to a backend server developed by Java teammates.

Features
User Authentication
Full registration flow using Formik and Yup for sign-up and login.
Access and refresh token-based authorization mechanism using Axios interceptors.
Product Management
Ability to add, edit, delete, view, and favorite products.
Detailed view of product information, including uploaded images.
Upload and save product images on the server.
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
Access the application at http://localhost:3000.
Usage
Upon starting the application, users can:

Register or log in using the provided forms.
Navigate through the marketplace to view, add, edit, delete, and favorite products.
View detailed product information including uploaded images.
Manage profile details, including image uploads and updates to name, lastname, and mobile phone with SMS verification.
Utilize debounce for dynamic HTTP requests, optimizing performance.
Contribution
For contributions or enhancements, create a pull request following the established guidelines. Issues and suggestions can be raised through the issue tracker.

Credits
Developers: Nursultan.
Backend Development: Java Developer Azamat
