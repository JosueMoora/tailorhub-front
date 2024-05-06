import axios from 'axios';
const baseURL = 'http://localhost:3001/api'

const restaurantApi = axios.create({baseURL})

restaurantApi.interceptors.request.use(

    config => {
        
            config.withCredentials = true
        return config
    }
)


export default restaurantApi