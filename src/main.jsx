import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "material-symbols";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
