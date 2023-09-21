import axios from 'axios'
const http = axios.create({
    baseURL: 'http://localhost:3000'
});

export const useHttp = () => {

    const post = async (url, params) => {
        return await http.post(url, params, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };

    return {
        post
    }
}