import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Login";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="login" element={<Login />} />
            {/* <Route path="reset" element={<Reset />} /> */}
            <Route path="/" element={<Layout />}>
                
            </Route>
        </Route>
    )
);

export default router;
