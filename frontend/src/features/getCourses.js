import axios from 'axios'

const API_URL = 'http://localhost:5000/api/courses/'

export const getCourses = async (category) => {

    const response = await axios.get(API_URL + category)

    return response.data
}
