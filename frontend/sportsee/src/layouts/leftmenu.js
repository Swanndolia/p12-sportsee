import weightIcon from "../assets/images/weight.svg"
import swimIcon from "../assets/images/swim.svg"
import bikeIcon from "../assets/images/bike.svg"
import meditateIcon from "../assets/images/meditate.svg"

import ImageLink from "../components/imagelink.js"

import "../assets/css/leftmenu.css"

const LeftMenu = () => {
    return (
        <aside>
            <nav>
                <ImageLink img={meditateIcon} link="meditate" />
                <ImageLink img={swimIcon} link="meditate" />
                <ImageLink img={bikeIcon} link="meditate" />
                <ImageLink img={weightIcon} link="meditate" />
            </nav>
            <p id="copyright">Copiryght, SportSee 2020</p>
        </aside>
    )
};

export default LeftMenu;