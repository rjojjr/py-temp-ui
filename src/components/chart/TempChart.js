import React, {PureComponent} from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const TempChart = ({data}) => {
    return (
        <LineChart
            width={1400}
            height={800}
            data={data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 115,
            }}
        >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="time" tick={<CustomizedAxisTick/>} />
            <YAxis unit="F"/>
            <Tooltip/>
            <Legend verticalAlign="top"/>
            <Line type="monotone" name="Office" dataKey="office" stroke="#FFBE33" activeDot={{r: 8}}/>
            <Line type="monotone" name="Freezer" dataKey="freezer" stroke="#82ca9d"/>
            <Line type="monotone" name="Bedroom" dataKey="bedroom" stroke="#8884d8"/>
            <Line type="monotone" name="Outside" dataKey="outside" stroke="#ff33ff"/>
        </LineChart>
    );
};

export default TempChart;

export const CustomizedAxisTick = ({x, y, stroke, payload}) => {
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-65)">{payload.value}</text>
        </g>
    );
}