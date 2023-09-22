import axios from 'axios'
const http = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT
});
export const useHttp = () => {
    const post = (url, params) => {
        return http.post(url, params)
    }
    return { post }
}