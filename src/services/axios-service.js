import axios from "axios";

export const getSummary = (url, room) => {

    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return axios.get(`${url}/summary/${room}`, options);
};