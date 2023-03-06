import { Link } from "react-router-dom";

const ImageLink = ({img, link}) => {
    return (
        <Link className="image-link" to={link}><img src={img} alt={link}></img></Link>
    )
};

export default ImageLink; 