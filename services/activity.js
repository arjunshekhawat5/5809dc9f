import axios from 'axios'

const baseUrl = "https://cerulean-marlin-wig.cyclic.app/"

const getAllActivities = () => {
    const request = axios.get(`${baseUrl}activities`)
    return request.then(response => response.data)
}


export default { getAllActivities }