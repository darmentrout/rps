import React from 'react';

const Arena = (props) => { 

    return(
        <div id="arena">
            <h2>The Arena</h2>
            <div>
                <p>
                    <strong>Player:</strong> { props.numberToSign(props.player) }
                    <span className={ props.playerWin ? "winner" : null }>🏆</span>
                </p>
                <p>
                    <strong>Robot:</strong> { props.numberToSign(props.robot) }
                    <span className={ props.robotWin ? "winner" : null }>🏆</span>
                </p>
                <p>
                    <strong>Outcome:</strong> <em>{ props.outcome }</em>
                </p>
            </div>
        </div>
    )
}

export default Arena;