import AXIOS from 'axios'

const instance = AXIOS.create({
    baseURL: 'http://localhost:5000/'
});

export default instance;