import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: 'Entrées',
            data: [2, 3, 20, 5, 1, 4],
            backgroundColor: 'rgb(75 29 148)',
        },
        {
            label: 'Sorties',
            data: [3, 10, 13, 15, 22, 30],
            backgroundColor: 'rgb(236 233 253)',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const LineChart = () => (
    <>
        <Bar data={data} options={options} />
    </>
);

export default LineChart;