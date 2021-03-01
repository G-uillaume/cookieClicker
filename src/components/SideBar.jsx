import React from 'react';

const SideBar = (props) => {
    return (
        <div id="sideBar">
            {props.children}
        </div>
    )
}

export default SideBar;