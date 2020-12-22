import React from 'react';

const History = (props) => {  

    return(
        <div id="history">
            <h2>Player History</h2>
            <table>
            <thead>
                <tr>
                    <th>Rock</th>
                    <th>Paper</th>
                    <th>Scissors</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="history-rock">
                            {props.rock}
                        </td>
                        <td className="history-paper">
                            {props.paper}
                        </td>
                        <td className="history-scissors">
                            {props.scissors}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default History;