import * as MOCK from "../utils/data.js"

/**

Returns the user data for the given user ID.
@param {number} thisID - The ID of the user to retrieve.
@returns {object} The user data for the given ID.
*/
export function getUserById(thisID) {
    return MOCK.USER_MAIN_DATA.find(({ id }) => id === thisID);
}
/**
 
Returns the activity data for the given user ID.
@param {number} thisID - The ID of the user to retrieve activity data for.
@returns {object} The activity data for the given user ID.
*/
export function getUserActivityById(thisID) {
    return MOCK.USER_ACTIVITY.find(({ userId }) => userId === thisID);
}
/**
 
Returns the average session data for the given user ID.
@param {number} thisID - The ID of the user to retrieve session data for.
@returns {object} The average session data for the given user ID.
*/
export function getUserAverageSessionById(thisID) {
    return MOCK.USER_AVERAGE_SESSIONS.find(({ userId }) => userId === thisID);
}
/**
 
Returns the completion score for the given user ID.
@param {number} thisID - The ID of the user to retrieve completion score for.
@returns {number} The completion score for the given user ID.
*/
export function getUserCompletionById(thisID) {
    return MOCK.USER_MAIN_DATA.find(({ id }) => id === thisID).todayScore ? MOCK.USER_MAIN_DATA.find(({ id }) => id === thisID).todayScore : MOCK.USER_MAIN_DATA.find(({ id }) => id === thisID).score;
}
/**
 
Returns the performance data for the given user ID.
@param {number} thisID - The ID of the user to retrieve performance data for.
@returns {object} The performance data for the given user ID.
*/
export function getUserPerformanceById(thisID) {
    return MOCK.USER_PERFORMANCE.find(({ userId }) => userId === thisID);
}