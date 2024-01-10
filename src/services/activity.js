import axios from 'axios'

//const corsAnywhereURL = 'https://charming-bat-singlet.cyclic.app/';

const baseUrl = "https://cerulean-marlin-wig.cyclic.app/"

//corsAnywhere url
//newBaseUrl = `${corsAnywhereURL}${baseUrl}`

const getAllActivities = () => {
    const request = axios.get(`${baseUrl}activities`)
    return request.then(response => response.data)
}

const updateActivity = (id, updatedActivity) => {
    const request = axios.patch(`${baseUrl}activities/${id}`, updatedActivity)
    return request.then(response => response.data)
}

export default { getAllActivities, updateActivity }