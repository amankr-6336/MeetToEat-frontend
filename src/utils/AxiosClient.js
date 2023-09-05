import axios from 'axios';

export const axiosClient=axios.create({
    baseURL:"https://mte-b.onrender.com/",
    withCredentials:true,
})