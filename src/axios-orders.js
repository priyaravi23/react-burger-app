import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://make-your-burger-app-default-rtdb.firebaseio.com/'
});

export default instance;