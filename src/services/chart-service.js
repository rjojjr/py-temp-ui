import { getChart } from "./axios-service";
import { networkErrorMsg, loadingMsg, doneLoadingMsg, sensors } from "../constants";

export async function getChart(handleMsg, handleStatus, type, start, end) {
    handleMsg(loadingMsg);
    //get chart here
    handleMsg(doneLoadingMsg);
}