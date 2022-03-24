import { Fragment } from 'react';
import Square from './Square';
import {useState} from 'react';

function Board({squares, onClick}){
    //let [status, setStatus] = useState('X');
    
    function renderSquare(i){
        return(
            <Square 
                value={squares[i]}
                onClick={() => onClick(i)}
            />
        )
    }

    return(
        <Fragment>
        <div className="board">
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