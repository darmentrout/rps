import React from 'react';
const Reset = (props) => {

    return(
        <div id="reset">
            <button onClick={ props.reset }>Reset Stats</button>
        </div>
    )
}

export default Reset;