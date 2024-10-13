import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import UsersList from "./pages/UsersList";
import Allproductlist from "./pages/Allproductlist";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {/* Redirect the root path to the login page */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="login" element={<Login />} />
            {/* Nest routes under layout */}
            <Route path="layout" element={<Layout />}>
                {/* Relative path for nested route */}
                <Route path="all-users" element={<UsersList />} />
                <Route path="all-product-list" element={<Allproductlist />} />
                {/* Add more routes here */}
            </Route>
        </Route>
    )
);

export default router;
