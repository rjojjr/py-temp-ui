import React from "react";

const StatusCard = ({status}) => {

    return(
        <div>
            <table>
                <tbody>
                <tr>
                    <td>
                        Sensor:
                    </td>
                    <td>
                        {status.id}
                    </td>
                </tr>
                <tr>
                    <td>
                        Last Update:
                    </td>
                    <td>
                        <p>{status.lastUpdate}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        Now:
                    </td>
                    <td>
                        Temp: {status.now[0]} Humidity: {status.now[1]}
                    </td>
                </tr>
                <tr>
                    <td>
                        Average for past day:
                    </td>
                    <td>
                        Temp: {status.day[0]} Humidity: {status.day[1]}
                    </td>
                </tr><tr>
                    <td>
                        Average for past week:
                    </td>
                    <td>
                        Temp: {status.week[0]} Humidity: {status.week[1]}
                    </td>
                </tr>
                </tbody>
            </table>
            <hr/>
        </div>
    )

}
export default StatusCard