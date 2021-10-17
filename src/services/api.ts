import axios from "axios";

const apiUrl = axios.create({
 baseURL: process.env.REACT_APP_API_URL
})

export default apiUrl;
