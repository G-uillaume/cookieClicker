import React from 'react';
import { render } from 'react-dom';
import img from '../img/cookie.jpeg';


const Cookie = (props) => {
    // const [fanState, updateFans, updateTotalFans, updateBoth] = useFans
    // const [fansPerSec, updateFansPerSec] = useFansPerSec


    return (
        <div id="cookie">
            <img onClick={() => props.onClick(1)} id="imgCookie" src={img} alt="Cookie Dingler" />
            <p>{props.fans.toFixed(0)}</p>
            <p>{props.fansSec.toFixed(1)} fans/s</p>
            <p>So far, you have won {props.total.toFixed(0)} fans !</p>
        </div>
    )
}

export default Cookie;