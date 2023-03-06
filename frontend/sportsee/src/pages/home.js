import "../assets/css/home.css"

import { useEffect, useState } from "react";

import * as API from "../services/getAPIData.js"

import Greetings from "../components/greetings";
import NutritionCards from "../components/nutritioncards";

/**
 * Home component that displays user information and statistics.
 *
 * @returns {JSX.Element} Home JSX element.
 */
const Home = () => {
  const [userData, setUserData] = useState(false);

  useEffect(() => {
    async function getData() {
      const data = await API.getUserById(12)
      setUserData(data)
    }
    getData()

  }, [])

  if (userData) {
    console.log(userData)
    return (
      <>
        <div id="user-infos">
          <Greetings firstName={userData.userInfos.firstName} />
          <main>
            <article id="graphs">
              <div id="daily-activity"></div>
              <span id="advanced-stats">
                <div id="average-duration"></div>
                <div id="intensity"></div>
                <div id="score"></div>
              </span>
            </article>
            <article id="stats">
              <NutritionCards data={userData.keyData} />
            </article>
          </main>
        </div>
      </>);
  };
}

export default Home;
