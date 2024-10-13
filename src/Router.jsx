
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import UsersList from "./pages/UsersList";  // New user list page

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Layout />}>
                <Route path="users" element={<UsersList />} />  // Add route for users list
                {/* Add more routes here */}
            </Route>
        </Route>
    )
);

export default router;
