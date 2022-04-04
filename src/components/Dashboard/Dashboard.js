import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Line, LineChart, BarChart, Bar, RadialBarChart, RadialBar ,Legend, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const [chart, setChart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChart(data))
    }, []);

    return (
        <div className='grid grid-cols-2 mt-20'>
            <div className='m-5'>
                <p className='font-bold text-left ml-20 mb-4'>LineChart</p>
                <LineChart width={300} height={300} data={chart}>
                    <Line dataKey={"investment"}></Line>
                    <Line dataKey={"revenue"}></Line>
                    <XAxis dataKey={"month"}></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                </LineChart>
            </div>

            <div className='m-5'>
                <p className='font-bold text-left ml-20 mb-4'>AreaChart</p>
                <AreaChart width={300} height={300} data={chart}>
                    <Area dataKey={"investment"}></Area>
                    <Area dataKey={"revenue"}></Area>
                    <XAxis dataKey={"month"}></XAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <YAxis></YAxis>
                </AreaChart>
            </div>
            <div className='m-5'>
                <p className='font-bold text-left ml-20 mb-4'>BarChart</p>
                <BarChart width={300} height={300} data={chart}>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar dataKey="revenue" fill='#82ca9d'></Bar>
                    <Bar dataKey={"sell"} fill="#8884d8"></Bar>
                </BarChart>
            </div>
            <div className='m-5'>
                <p className='font-bold text-left ml-20 mb-4'>RadialBar Chart</p>
                <RadialBarChart width={300} height={300} data={chart} innerRadius="10%" outerRadius="80%" startAngle={180} endAngle={0}>
                    <RadialBar minAngle={15} label={{ fill: '#8884d8', position: 'insideStart' }} background clockWise={true} dataKey='investment' ></RadialBar>
                    <Legend />
                    <Tooltip></Tooltip>
                </RadialBarChart>
            </div>
        </div>

    );
};

export default Dashboard;