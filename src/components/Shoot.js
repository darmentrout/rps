import React from 'react';
const Shoot = (props) => {

    return(
        <div id="shoot">
            <button onClick={ () => props.sign(0) }>Rock</button>
            <button onClick={ () => props.sign(1) }>Paper</button>
            <button onClick={ () => props.sign(2) }>Scissors</button>
        </div>
    )
}

export default Shoot;