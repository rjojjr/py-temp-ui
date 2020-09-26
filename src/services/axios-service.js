import axios from "axios";

export const getSummary = () => {

    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return axios.get(`http://192.168.1.169:8080/summary`);
};

export const getChart = (type, start, end) => {
    const data = {
        type: type,
        startDate: start,
        endDate: end
    }

    return axios.post(`http://192.168.1.169:8080/chart`, data);
}