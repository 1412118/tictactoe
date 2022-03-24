import Board from "./Board";
import React, {Fragment, useState} from 'react';

function Game(){
    let [state, setState] = useState({
        history: [{
            squares: Array(9).fill('')
        }],
        //squares: Array(9).fill(''),
        xIsNext: true
    });

    function handleOnClick(i){
        const stateHistory = state.history;
        if(calculateWinner(stateHistory[stateHistory.length - 1].squares)){
            return;
        }
        const squares = stateHistory[stateHistory.length - 1].squares.slice();
        squares[i] = state.xIsNext ? 'X' : 'O';
        
        state.history.push({squares});
        const history = state.history;
        setState({
            history,
            //squares,
            xIsNext: !state.xIsNext
        })
    }

    function calculateWinner(squares){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for(let i = 0; i < lines.length; i++){
            const [a, b, c] = lines[i];
            if(squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a]
            }
        }
        return null;
    }

    function changeStatus(){
        const history = state.history[state.history.length - 1];
        const winner = calculateWinner(history.squares);
        if(winner){
            return 'Winner: ' + winner;
        }
        else{
            return 'Next Player: ' + (state.xIsNext ? 'X' : 'O');
        }
    }

    return (
        <Fragment>
            <div>
                <div className="status">{changeStatus()}</div>
                <Board 
                    squares={state.history[state.history.length - 1].squares}
                    onClick={(i) => handleOnClick(i)}
                />
            </div>
            <ul>
                {
                    state.history.map((e, index) => {
                        const desc = index ? "Go to step " + index : "Go to start game"
                        return <li>{desc}</li>
                    })
                }
            </ul>
        </Fragment>
    )
}

export default Game;