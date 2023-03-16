import axios from "axios"

/**
 * Retrieves user data by ID from API endpoint.
 * @async
 * @function getUserById
 * @param {number} id - The ID of the user to retrieve data for.
 * @returns {Promise} A promise that resolves to an object containing the user data.
 */
export async function getUserById(id) {
    return (
        await axios.get("http://localhost:3000/user/" + id)
            .then((resp) => resp.data.data))
}

/**
 * Retrieves user activity data by ID from API endpoint.
 * @async
 * @function getUserActivityById
 * @param {number} id - The ID of the user to retrieve activity data for.
 * @returns {Promise} A promise that resolves to an object containing the user activity data.
 */
export async function getUserActivityById(id) {
    return (await axios.get("http://localhost:3000/user/" + id + "/activity")
        .then((resp) => resp.data.data))
}

/**
 * Retrieves user average session data by ID from API endpoint.
 * @async
 * @function getUserAverageSessionById
 * @param {number} id - The ID of the user to retrieve average session data for.
 * @returns {Promise} A promise that resolves to an object containing the user average session data.
 */
export async function getUserAverageSessionById(id) {
    return (
        await axios.get("http://localhost:3000/user/" + id + "/average-sessions")
            .then((resp) => resp.data.data))
}

/**
 * Retrieves user completion data by ID from API endpoint.
 * @async
 * @function getUserCompletionById
 * @param {number} id - The ID of the user to retrieve completion data for.
 * @returns {Promise} A promise that resolves to a number representing the user's completion score for the day.
 */
export async function getUserCompletionById(id) {
    return (
        await axios.get("http://localhost:3000/user/" + id)
            .then((resp) => resp.data.data.score)) ?
            (await axios.get("http://localhost:3000/user/" + id)
                .then((resp) => resp.data.data.score)) :
            (await axios.get("http://localhost:3000/user/" + id)
                .then((resp) => resp.data.data.todayScore))
}

/**
 * Retrieves user performance data by ID from API endpoint.
 * @async
 * @function getUserPerformanceById
 * @param {number} id - The ID of the user to retrieve performance data for.
 * @returns {Promise} A promise that resolves to an object containing the user performance data.
 */
export async function getUserPerformanceById(id) {
    return (
        await axios.get("http://localhost:3000/user/" + id + "/performance")
            .then((resp) => resp.data.data))
}
