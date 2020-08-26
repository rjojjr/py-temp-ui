import { getSummary} from "./axios-service"
import { networkErrorMsg, loadingMsg, sensors } from "../constants";

export async function getStatus(sensor, handleMsg, handleStatus) {
    try {
        handleMsg(loadingMsg);
        const sensor = sensors.filter(sen => sen.room.localeCompare(sensor) === 0)[0];
        const apiResponse = await getSummary(sensor.url, sensor.room);
        if(apiResponse.status === 200){
            handleMsg({});
            const status = {
                id: sensor.room,
                now: apiResponse.data.now,
                day: apiResponse.data.day,
                week: apiResponse.data.week
            }
            handleStatus(status)
        } else {
            handleMsg(networkErrorMsg);
        }
    } catch (error) {
        handleMsg(networkErrorMsg);
    }
}