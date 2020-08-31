import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-88f9c.firebaseio.com/'
})

export default instance;