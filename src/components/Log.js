import React from 'react';

const Log = (props) => {
    return (
        <ul id="log">
            <caption><h2>Recent Games</h2></caption>
            {props.log.map(function(v, k){
                return <li key={ k }>{v}</li>;
            })}
        </ul>
    )
}

export default Log;