/**
 * Greetings component that displays a greeting message based on the user's first name.
 *
 * @param {Object} props - Component props.
 * @param {string} props.firstName - User's first name.
 * @returns {JSX.Element} Greetings JSX element.
 */

import "../assets/css/greetings.css"

const Greetings = ({ firstName }) => {
    return (
    <>
        <h1 className="greetings">Bonjour <span id="first-name-title">{firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </>
    )
};

export default Greetings; 