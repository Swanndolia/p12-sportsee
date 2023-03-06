import { Routes, Route } from "react-router-dom";

import Header from "../layouts/header.js";
import LeftMenu from "../layouts/leftmenu.js";

import Home from "./home.js";

/**
 * Router component that sets up the app's routing.
 *
 * @returns {JSX.Element} Router JSX element.
 */
const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<><Header /><LeftMenu/></>}>
                <Route index element={<Home />} />
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    )
};

export default Router;
