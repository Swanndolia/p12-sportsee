import "../assets/css/home.css"

import { useEffect, useState } from "react";

import * as API from "../services/getAPIData.js"
import * as MOCK from "../services/getMOCKData"

import Greetings from "../components/greetings";
import NutritionCards from "../components/nutritioncards";
import DailyChart from "../components/dailychart.js";
import DurationChart from "../components/durationchart.js";
import PerformanceChart from "../components/performancechart.js";
import ScoreChart from "../components/scorechart.js";
/**

The Home component displays the user information and their graphs and stats.
@returns {JSX.Element} The JSX representation of the Home component.
*/
const Home = () => {
  const [userData, setUserData] = useState(false);
  const [userDailyData, setUserDailyData] = useState(false);
  const [userPerformanceData, setUserPerformanceData] = useState(false);
  const [userDurationData, setUserDurationData] = useState(false);
  const [userScoreData, setUserScoreData] = useState(false);
  const userID = 12

  useEffect(() => {
    async function getData() {
      const useMOCK = false
      const data = useMOCK ? MOCK.getUserById(userID) : await API.getUserById(userID)
      const dailyData = useMOCK ? MOCK.getUserActivityById(userID) : await API.getUserActivityById(userID)
      const scoreData = useMOCK ? MOCK.getUserCompletionById(userID) : await API.getUserCompletionById(userID)
      const performanceData = useMOCK ? MOCK.getUserPerformanceById(userID) : await API.getUserPerformanceById(userID)
      const durationData = useMOCK ? MOCK.getUserAverageSessionById(userID) : await API.getUserAverageSessionById(userID)
      setUserData(data)
      setUserDailyData(dailyData)
      setUserPerformanceData(performanceData)
      setUserDurationData(durationData)
      setUserScoreData(scoreData)
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
                <ScoreChart scoreData={userScoreData} />
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