import { Fragment } from 'react';
import Square from './Square';
import {useState} from 'react';

function Board(){
    let [status, setStatus] = useState('X');
    //let status = 'X';

    let [states, setStates] = useState(Array(9));

   //let states = Array(9);

    function handleOnClick(i){
        if(status === 'X'){
            states[i] = 'X';
            setStatus('O');
        }
        else{
            states[i] = 'O';
            setStatus('X'); 
        }
        console.log(states);
    }

    function renderSquare(i){
        return(
            <Square 
                value={states[i]}
                onClick={() => handleOnClick(i)}
            />
        )
    }

    return(
        <Fragment>
            {console.log(1)}
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