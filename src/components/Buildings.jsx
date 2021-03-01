import React, { useReducer, useState } from 'react';

import Building from './Building';
import useFans from '../index';
import useFansPerSec from '../index';

const init = () => {
    return [{
        id: 1,
        name: "Productor",
        price: 15,
        number: 0,
        fansPerSec: 0.1,
    },
    {
        id: 2,
        name: "Royalties",
        price: 100,
        number: 0,
        fansPerSec: 1,
    },
    {
        id: 3,
        name: "Album",
        price: 1000,
        number: 0,
        fansPerSec: 8,
    },
    {
        id: 4,
        name: "Concert at Olympia",
        price: 12000,
        number: 0,
        fansPerSec: 47,
    },
    {
        id: 5,
        name: "Grammy Award",
        price: 130000,
        number: 0,
        fansPerSec: 260,
    },
    {
        id: 6,
        name: "Passed away from an overdose",
        price: 1400000,
        number: 0,
        fansPerSec: 1400,
    }]
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'updatePriceAndNumber':
            const fanMaker = {...state[action.index],
                price: Math.floor(state[action.index].price * 1.15),
                number: state[action.index].number + 1
            }
            const fanBase = [
                ...state.slice(0, action.index),
                fanMaker,
                ...state.slice(action.index+1)
            ]
            return fanBase
    }
}

const Buildings = (props) => {

    const [fanBase, dispatch] = useReducer(reducer, 0, init)


    const handleUpdateBuilding = id => {
        const index = fanBase.findIndex(fanMaker => fanMaker.id === id)
        if (props.fans >= fanBase[index].price) {
            dispatch({type: 'updatePriceAndNumber', index: index})
            props.buyBuilding(fanBase[index].price, fanBase[index].fansPerSec)
            // console.log(fanBase[index].price, fanBase[index].fansPerSec)
        }
    }

    return (
        <>
            {fanBase.map(fanMaker => (
                <Building
                key={fanMaker.id}
                className={props.fans >= fanMaker.price ? 'fanMaker' : 'fanMaker locked'}
                fanMaker={fanMaker}
                updateFanMaker={handleUpdateBuilding}
                />
            ))}
        </>
    )
}

export default Buildings