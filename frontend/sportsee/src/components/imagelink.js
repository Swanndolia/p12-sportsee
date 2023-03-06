/**
 * Image link component for navigating to a route using an image.
 *
 * @param {Object} props - The component props.
 * @param {string} props.img - The image source.
 * @param {string} props.link - The route to navigate to when clicked.
 * @returns {JSX.Element} - The image link element.
 */
import { Link } from "react-router-dom";

const ImageLink = ({img, link}) => {
    return (
        <Link className="image-link" to={link}><img src={img} alt={link}></img></Link>
    )
};

export default ImageLink; 