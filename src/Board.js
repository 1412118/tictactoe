import { Fragment } from 'react';
import Square from './Square';

function renderSquare(value, statusPlayer){
    return(
        <Square 
            value={value}
            statusPlayer={statusPlayer}
        />
    )
}

function Board({statusPlayer}){
    return(
        <Fragment>
        <div className="board">
            <h3 className="status">Next Player: {statusPlayer}</h3>
            <div className="board-row">
                {renderSquare(0, statusPlayer)}
                {renderSquare(1, statusPlayer)}
                {renderSquare(2, statusPlayer)}
            </div>
            <div className="board-row">
                {renderSquare(3, statusPlayer)}
                {renderSquare(4, statusPlayer)}
                {renderSquare(5, statusPlayer)}
            </div>
            <div className="board-row">
                {renderSquare(6, statusPlayer)}
                {renderSquare(7, statusPlayer)}
                {renderSquare(8, statusPlayer)}
            </div>
        </div>
        </Fragment>
    )
}

export default Board;