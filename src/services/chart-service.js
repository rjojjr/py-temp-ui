import { getChart } from "./axios-service";
import { networkErrorMsg, loadingMsg, doneLoadingMsg, sensors } from "../constants";

export async function getChart(handleMsg, handleChart, type, start, end) {
    handleMsg(loadingMsg);
    try{
        const apiResponse = await getChart(type, start, end);
        if(apiResponse.status == 200){
            handleChart(apiResponse.data.intervals)
        } else {
            handleMsg(networkErrorMsg);
        }
    }catch (e) {
        console.log(e);
        handleMsg(networkErrorMsg);
    }
    handleMsg(doneLoadingMsg);
}