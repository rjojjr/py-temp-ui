import axios from "axios";

export const getSummary = (url, room) => {

    console.log("here")
    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return axios.get(`http://${url}/summary/${room}`);
};