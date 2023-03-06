import axios from "axios"

export async function getUserById(id) {
    return (await axios.get("http://localhost:3000/user/" + id)).data.data
}
export async function getUserActivityById(id) {
    return (await axios.get("http://localhost:3000/user/" + id + "activity")).data.data
}
export async function getUserAverageSessionById(id) {
    return (await axios.get("http://localhost:3000/user/" + id + "average-sessions")).data.data
}
export async function getUserCompletionById(id) {
    return (await axios.get("http://localhost:3000/user/" + id)).data.data.todayScore
}
export async function getUserPerformanceById(id) {
    return (await axios.get("http://localhost:3000/user/" + id + "performance")).data.data
} 