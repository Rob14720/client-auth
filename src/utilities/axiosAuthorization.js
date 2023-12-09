import axios from 'axios';

export const axiosAuth = () => {
    const token = localStorage.getItem('token');

    return axiosAuth.create({baseURL: `http://localhost:9000/api`,
headers: {authorization}})
}