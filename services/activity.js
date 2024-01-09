import axios from 'axios'

const baseUrl = "https://cerulean-marlin-wig.cyclic.app/"

const getAllActivities = () => {
    const request = axios.get(`${baseUrl}activities`)
    return request.then(response => response.data)
}

const updateActivity = (id, updatedActivity) => {
    const request = axios.patch(`${baseUrl}activities/${id}`, updatedActivity)
    return request.then(response => response.data)
}

export default { getAllActivities, updateActivity }