import "../assets/css/home.css"

import { useEffect, useState } from "react";

import * as API from "../services/getAPIData.js"

import Greetings from "../components/greetings";
import NutritionCards from "../components/nutritioncards";
import DailyChart from "../components/dailychart.js";
import DurationChart from "../components/durationchart.js";
import PerformanceChart from "../components/performancechart.js";
import ScoreChart from "../components/scorechart.js";

/**
 * Home component that displays user information and statistics.
 *
 * @returns {JSX.Element} Home JSX element.
 */
const Home = () => {
  const [userData, setUserData] = useState(false);
  const [userDailyData, setUserDailyData] = useState(false);
  const [userPerformanceData, setUserPerformanceData] = useState(false);
  const [userDurationData, setUserDurationData] = useState(false);

  const userID= 18

  useEffect(() => {
    async function getData() {
      const data = await API.getUserById(userID)
      const dailyData = await API.getUserActivityById(userID)
      const performanceData = await API.getUserPerformanceById(userID)
      const durationData = await API.getUserAverageSessionById(userID)
      setUserData(data)
      setUserDailyData(dailyData)
      setUserPerformanceData(performanceData)
      setUserDurationData(durationData)
    }
    getData()

  }, [])

  if (userData) {
    return (
      <>
        <div id="user-infos">
          <Greetings firstName={userData.userInfos.firstName} />
          <main>
            <article id="graphs">
              <DailyChart dailyData={userDailyData.sessions} />
              <span id="advanced-stats">
                <DurationChart durationData={userDurationData.sessions} />
                <PerformanceChart performanceData={userPerformanceData.data} />
                <ScoreChart scoreData={userData} />
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
