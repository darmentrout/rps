import React from 'react';

const History = (props) => {  

    return(
        <table>
        <caption><h2>Player History</h2></caption>
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
    )
}

export default History;