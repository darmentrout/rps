import React from 'react';

const Log = (props) => {
    return (
        <div id="log">
            <h2>Game Log</h2>
            <ul id="logList">
                {props.log.map(function(v, k){
                    return <li key={ k }>{v}</li>;
                })}
            </ul>
        </div>
    )
}

export default Log;