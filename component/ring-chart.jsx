import { Tiny } from '@ant-design/plots';
import React from 'react';

export default function RingChart(props) {

    const { color, totalValue, obtainValue, title } = { ...props }

    const percent = obtainValue / totalValue;
    const config = {
        percent,
        width: 120,
        height: 120,
        color: ['#E8EFF5', color],
        annotations: [
            {
                type: 'text',
                style: {
                    text: `${percent * 100}%`,
                    x: '50%',
                    y: '50%',
                    textAlign: 'center',
                    fontSize: 16,
                    fontStyle: 'bold',
                },
            },
        ],
    };

    return (<div className='text-center'><Tiny.Ring {...config} />
        <h1 className={`pt-2 text-[${color}] `}  >{title}</h1>
    </div>)
}