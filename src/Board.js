import { Fragment } from 'react';
import Square from './Square';
//import {useState} from 'react';

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
                <svg className="lines">
                    <g fill="none" stroke="#000" strokeWidth="2">
                        <path className="path1" strokeLinecap="butt" d="M174,114L0,114"/>
                        <path className="path2" strokeLinecap="butt" d="M174,114L348,114" />
                        <path className="path3" strokeLinecap="butt" d="M174,229L0,229"/>
                        <path className="path4" strokeLinecap="butt" d="M174,229L348,229" />
                        <path className="path5" strokeLinecap="butt" d="M114,174L114,0"/>
                        <path className="path6" strokeLinecap="butt" d="M229,174L229,0" />
                        <path className="path7" strokeLinecap="butt" d="M114,174L114,348"/>
                        <path className="path8" strokeLinecap="butt" d="M229,174L229,348" />
                    </g>
                </svg>
                <table>
                    <tbody>
                        <tr>
                            {renderSquare(0)}
                            {renderSquare(1)}
                            {renderSquare(2)}
                        </tr>
                        <tr>
                            {renderSquare(3)}
                            {renderSquare(4)}
                            {renderSquare(5)}
                        </tr>
                        <tr>
                            {renderSquare(6)}
                            {renderSquare(7)}
                            {renderSquare(8)}
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default Board;