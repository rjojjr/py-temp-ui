import { getSummary } from "./axios-service"
import { networkErrorMsg, loadingMsg, doneLoadingMsg, sensors } from "../constants";

export async function getAllStatuses(handleMsg, handleStatus) {
    handleMsg(loadingMsg);
    for (var sensor of sensors){
        await getStatus(sensor, handleMsg, handleStatus);
    }
    console.log("done")
    handleMsg(doneLoadingMsg);
}

export async function getStatus(sensor, handleMsg, handleStatus) {
    try {
        const apiResponse = await getSummary(sensor.url, sensor.room);
        if(apiResponse.status === 200){
            console.log('resp: ', apiResponse)
            const status = {
                id: sensor.room,
                now: apiResponse.data.now,
                day: apiResponse.data.day,
                week: apiResponse.data.week
            };
            handleStatus(status);
        } else {
            handleMsg(networkErrorMsg);
        }
    } catch (error) {
        handleMsg(networkErrorMsg);
    }
}