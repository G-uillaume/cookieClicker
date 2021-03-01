import React from 'react';


const Building = props => {
    
    return (
    <div className={props.className} id={ "fanMaker" + props.fanMaker.id }>
        <div className="fanMakerLeft">
            <button onClick={() => props.updateFanMaker(props.fanMaker.id)}>{props.fanMaker.name} <small>{props.fanMaker.fansPerSec} fan(s)/s</small></button>
        </div>
        <div className="fanMakerRight">
            <p>Price : {props.fanMaker.price}</p>
            <p>You have {props.fanMaker.number}</p>
        </div>
    </div>
    )
}

export default Building