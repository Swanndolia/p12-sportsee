import weightIcon from "../assets/images/weight.svg"
import swimIcon from "../assets/images/swim.svg"
import bikeIcon from "../assets/images/bike.svg"
import meditateIcon from "../assets/images/meditate.svg"
import ImageLink from "../components/imagelink.js"

import "../assets/css/leftmenu.css"
/**

Renders the left menu component with navigation links and a copyright notice.
@component
@return {JSX.Element} LeftMenu component
*/
const LeftMenu = () => {
    return (
        <aside>
            <nav>
                <ImageLink img={meditateIcon} link="meditate" />
                <ImageLink img={swimIcon} link="swim" />
                <ImageLink img={bikeIcon} link="bike" />
                <ImageLink img={weightIcon} link="weight" />
            </nav>
            <p id="copyright">
                Copiryght, SportSee 2020
            </p>
        </aside>
    )
};

export default LeftMenu;