import "../assets/css/greetings.css"

const Greetings = ({ firstName }) => {
    return (<>
        <h1 className="greetings">Bonjour <span id="first-name-title">{firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </>
    )
};

export default Greetings; 