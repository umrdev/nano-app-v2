import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgba(254, 158, 11, 1)',
            'rgb(75 29 148)',
            'rgb(236 233 253)'
        ],
        height : 10,
        hoverOffset: 4
    }]
};


const Dotnut = () => (
    <>
        <Doughnut data={data} />
    </>
);

export default Dotnut;