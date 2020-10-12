import { getChart } from "./axios-service";
import { networkErrorMsg, loadingMsg, doneLoadingMsg } from "../constants";

export async function fetchChart(handleMsg, handleChart, type, start, end) {
    handleMsg({});
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