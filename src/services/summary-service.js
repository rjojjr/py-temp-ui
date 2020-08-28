import { getSummary } from "./axios-service"
import { networkErrorMsg, loadingMsg, doneLoadingMsg, sensors } from "../constants";

export async function getAllStatuses(handleMsg, handleStatus) {
    handleMsg(loadingMsg);
    await getStatus(handleMsg, handleStatus);

    handleMsg(doneLoadingMsg);
}

export async function getStatus(handleMsg, handleStatus) {
    try {
        const apiResponse = await getSummary();
        console.log("done", apiResponse)
        if(apiResponse.status === 200){
            for (var index in apiResponse.data) {
                const statusJson = {
                    id: apiResponse.data[index].sensor,
                    now: apiResponse.data[index].now,
                    day: apiResponse.data[index].day,
                    week: apiResponse.data[index].week
                };
                handleStatus(statusJson);
            }
        } else {
            handleMsg(networkErrorMsg);
        }
    } catch (error) {
        handleMsg(networkErrorMsg);
    }
}