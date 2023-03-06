import { Routes, Route } from "react-router-dom";

import Header from "../layouts/header.js";
import LeftMenu from "../layouts/leftmenu.js";


import Home from "./home.js";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<><Header /><LeftMenu/></>}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
};

export default Router;
