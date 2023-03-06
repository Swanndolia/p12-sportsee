import "../assets/css/nutritioncards.css"

import caloriesIcon from "../assets/images/calories-icon.svg"
import fatIcon from "../assets/images/fat-icon.svg"
import proteinIcon from "../assets/images/protein-icon.svg"
import carbsIcon from "../assets/images/carbs-icon.svg"

const NutritionCards = ({ data }) => {
    console.log(data)
    return (generateCards(data));
};

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

function mapKeyValue(key, value) {
    switch (key) {
        case "calorieCount":
            return (
                <>
                    <img src={caloriesIcon} />
                    <figcaption>
                        <b>{value}KCal</b><br />Calories
                    </figcaption></>
            )
        case "proteinCount":
            return (
                <>
                    <img src={proteinIcon} />
                    <figcaption>
                        <b>{value}g</b><br />Proteines
                    </figcaption></>
            )
        case "carbohydrateCount":
            return (
                <>
                    <img src={carbsIcon} />
                    <figcaption>
                        <b>{value}g</b><br />Glucides
                    </figcaption></>
            )
        case "lipidCount":
            return (
                <>
                    <img src={fatIcon} />
                    <figcaption>
                        <b>{value}g</b><br />Lipides
                    </figcaption></>
            )
    }
}

export default NutritionCards; 