import { useSelector } from "react-redux";
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    const isAuthenticated = useSelector(state => state.isAuthenticated);

    return (
        <div>
            <h1>Private Router</h1>
            {isAuthenticated ? <Outlet /> : <Navigate to="/" />}
        </div>
    )
};

function saveUser(user) {
    let users = [];

    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}

export { PrivateRoutes, saveUser };
