import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://blog-react-f43e3-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;