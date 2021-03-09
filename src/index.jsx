import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Cookie from './components/Cookie';
import SideBar from './components/SideBar';
import Buildings from './components/Buildings';

const init = (init) => {
    return {
        fans: init,
        fansPerSec: init,
        totalFans: init
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'updateFans':
            return {...state, fans: state.fans + (action.payload)}
        case 'updateFansPerSec':
            return {...state, fansPerSec: state.fansPerSec + (action.payload)}
        case 'updateTolalFans':
            return {...state, totalFans: state.totalFans + (action.payload)}
        case 'updateTotalAndFans':
            return {...state, fans: state.fans + (action.payload), totalFans: state.totalFans + (action.payload)}
        case 'buyBuilding':
            console.log(action)
            return {...state, 
                fans: state.fans - (action.payload),
                fansPerSec: state.fansPerSec + (action.payload2)
                }
    }
}


const App = () => {
    const [fanState, dispatch] = useReducer(reducer, 0, init)

    const handleTotalAndFans = (x) => {
        dispatch({type: 'updateTotalAndFans', payload: x})
    }

    const buyBuilding = (x, y) => {
        dispatch({
            type: 'buyBuilding',
            payload: x,
            payload2: y
        })
    }

    useEffect(() => {
        if (fanState.fansPerSec > 0) {
            const timer = setInterval(() => {
                dispatch({type: 'updateFans', payload: fanState.fansPerSec})
            }, 1000)
            return () => clearInterval(timer)
        }
    }, [fanState.fansPerSec])

    return (
        <>
        {/* {console.log(fanState)} */}
            <h1>Welcome to the Cookie Dingler clicker !</h1>
            {/* {console.log(fanState)} */}
            <main>
                <SideBar>
                    <Buildings
                    fans={fanState.fans}
                    buyBuilding={buyBuilding}
                    />
                </SideBar>
                <Cookie
                fans={fanState.fans}
                total={fanState.totalFans}
                onClick={handleTotalAndFans}
                fansSec={fanState.fansPerSec}
                />
            </main>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));