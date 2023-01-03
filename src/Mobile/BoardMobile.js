import { Fragment } from 'react';
import SquareMobile from './SquareMobile';
//import {useState} from 'react';

function BoardMobile({squares, onClick}){
    //let [status, setStatus] = useState('X');
    
    function renderSquare(i){
        return(
            <SquareMobile
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
                        <path className="path1" strokeLinecap="butt" d="M140,92L0,92"/>
                        <path className="path2" strokeLinecap="butt" d="M140,92L273,92" />
                        <path className="path3" strokeLinecap="butt" d="M140,186L0,186"/>
                        <path className="path4" strokeLinecap="butt" d="M140,186L275,186" />
                        <path className="path5" strokeLinecap="butt" d="M92,140L92,0"/>
                        <path className="path6" strokeLinecap="butt" d="M186,140L186,0" />
                        <path className="path7" strokeLinecap="butt" d="M92,140L92,273"/>
                        <path className="path8" strokeLinecap="butt" d="M186,140L186,273" />
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

export default BoardMobile;