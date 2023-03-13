import "../assets/css/nutritioncards.css"

import caloriesIcon from "../assets/images/calories-icon.svg"
import fatIcon from "../assets/images/fat-icon.svg"
import proteinIcon from "../assets/images/protein-icon.svg"
import carbsIcon from "../assets/images/carbs-icon.svg"

/**
 * A component that generates nutrition cards.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.data - The nutrition data.
 * @returns {JSX.Element[]} An array of React elements that display the nutrition cards.
 */
const NutritionCards = ({ data }) => {
    return (generateCards(data));
};

/**
 * Generates nutrition cards from the given data.
 *
 * @param {Object} data - The nutrition data.
 * @returns {JSX.Element[]} An array of React elements that display the nutrition cards.
 */
function generateCards(data) {
    const nutritionCardList = []
    for (const [key, value] of Object.entries(data)) {
        nutritionCardList.push(
            <figure key={key}>
                {mapKeyValue(key, value)}
            </figure>
        )
    }
    return nutritionCardList;
}

/**
 * Maps a nutrition data key-value pair to a React element.
 *
 * @param {string} key - The nutrition data key.
 * @param {number} value - The nutrition data value.
 * @returns {JSX.Element} A React element that displays the nutrition data.
 */
function mapKeyValue(key, value) {
    switch (key) {
        case "calorieCount":
            return (
                <>
                    <img alt="" src={caloriesIcon} />
                    <figcaption>
                        <b>{value}KCal</b><br />Calories
                    </figcaption></>
            )
        case "proteinCount":
            return (
                <>
                    <img alt="" src={proteinIcon} />
                    <figcaption>
                        <b>{value}g</b><br />Proteines
                    </figcaption></>
            )
        case "carbohydrateCount":
            return (
                <>
                    <img alt="" src={carbsIcon} />
                    <figcaption>
                        <b>{value}g</b><br />Glucides
                    </figcaption></>
            )
        case "lipidCount":
            return (
                <>
                    <img alt="" src={fatIcon} />
                    <figcaption>
                        <b>{value}g</b><br />Lipides
                    </figcaption></>
            )
        default:
            break;
    }
}

export default NutritionCards;