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
                        Now:
                    </td>
                    <td>
                        {status.now}
                    </td>
                </tr>
                <tr>
                    <td>
                        Average for past day:
                    </td>
                    <td>
                        {status.day}
                    </td>
                </tr><tr>
                    <td>
                        Average for past week:
                    </td>
                    <td>
                        {status.week}
                    </td>
                </tr>
                </tbody>
            </table>
            <hr/>
        </div>
    )

}
export default StatusCard