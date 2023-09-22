import axios from 'axios'
const http = axios.create({
    baseURL: 'http://localhost:3000'
});
export const useHttp = () => {
    const post = (url, params) => {
        return http.post(url, params)
    }
    return { post }
}