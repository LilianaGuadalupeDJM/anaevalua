import axios from "axios";

const register = async (readername, email, password) => {
    return axios.post('https://api-books-omega.vercel.app/getin/signup',{
        readername,
        email,
        password,
        roles: ['MasterLibrarian'],
    });

};

const loginF = async (email, password) => {
    return axios.post('https://api-books-omega.vercel.app/getin/signin',{
        email,
        password,
    });
};

export default {
    register,
    loginF,
};