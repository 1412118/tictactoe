import { Fragment } from 'react';
import Square from './Square';
import {useState} from 'react';

function Board(){
    let [status, setStatus] = useState('X');

    let [state, setState] = useState(Array(9));

    function handleOnClick(value){
        state[value] = 'X';
        status = 'O';
        //setState(state);
        setStatus(status);
    }

    function renderSquare(value){
        return(
            <Square 
                value={state[value]}
                onClick={() => handleOnClick(value)}
            />
        )
    }

    return(
        <Fragment>
        <div className="board">
            <h3 className="status">Next Player: {status}</h3>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
        </Fragment>
    )
}

export default Board;