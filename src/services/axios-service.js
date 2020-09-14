import axios from "axios";

export const getSummary = () => {

    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return axios.get(`http://192.168.1.169:8080/summary`);
};

export const getPageReports = () => {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return axios.get('http://192.168.1.200:8081/page-flow-reports/material');
};