import React, { useState } from 'react';

const useFans = (x = 1) => {
    const [fanState, setState] = useState({
        fans: 0,
        totalFans: 0
    })

    const updateFans = x => {
        let state = {...fanState}
        state.fans++
        setState(fanState => {
            return {...fanState, ...state}
        })
    }

    const updateTotalFans = x => {
        let state = {...fanState}
        state.totalFans++
        setState(fanState => {
            return {...fanState, ...state}
        })
    }

    const updateBoth = (x) => {
        let state = {...fanState}
        state.totalFans++
        state.fans++
        setState(fanState => {
            return {...fanState, ...state}
        })
    }

    return [
        fanState,
        updateFans,
        updateTotalFans,
        updateBoth
    ]
}

export default useFans