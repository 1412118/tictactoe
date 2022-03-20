import { Fragment } from 'react';
import Square from './Square';
import {useState} from 'react';

function Board(){
    //let [status, setStatus] = useState('X');
    let [state, setState] = useState({
        squares: Array(9).fill(''),
        xIsNext: true
    });

    function handleOnClick(i){
        if(calculateWinner(state.squares)){
            return;
        }
        const squares = state.squares.slice();
        squares[i] = state.xIsNext ? 'X' : 'O';
        setState({
            squares,
            xIsNext: !state.xIsNext
        })
    }

    function renderSquare(i){
        return(
            <Square 
                value={state.squares[i]}
                onClick={() => handleOnClick(i)}
            />
        )
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
        for(var i = 0; i < lines.length; i++){
            const [a, b, c] = lines[i];
            if(squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a]
            }
        }
        return null;
    }

    function changeStatus(){
        const winner = calculateWinner(state.squares);
        if(winner){
            return 'Winner: ' + winner;
        }
        else{
            return 'Next Player: ' + (state.xIsNext ? 'X' : 'O');
        }
    }

    return(
        <Fragment>
        <div className="board">
            <h3 className="status">{changeStatus()}</h3>
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