import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd30d648e779b4028a492d0fb84ed5811',
    }
})