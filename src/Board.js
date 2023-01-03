import { Fragment } from "react";
import Square from "./Square";
//import {useState} from 'react';

function Board({ squares, onClick }) {
  //let [status, setStatus] = useState('X');
console.log("Board");
  function renderSquare(i) {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  }
  return (
    <Fragment>
      <div className="board">
        <svg className="lines">
          <g fill="none" stroke="#000" strokeWidth="2">
            <g fill="none" stroke="#000" strokeWidth="2">
              <path
                className="path1"
                strokeLinecap="butt"
                d="M213,139L0,139"
              ></path>
              <path
                className="path2"
                strokeLinecap="butt"
                d="M213,139L425,139"
              ></path>
              <path
                className="path3"
                strokeLinecap="butt"
                d="M213,278L0,278"
              ></path>
              <path
                className="path4"
                strokeLinecap="butt"
                d="M213,278L425,278"
              ></path>
              <path
                className="path5"
                strokeLinecap="butt"
                d="M139,213L139,0"
              ></path>
              <path
                className="path6"
                strokeLinecap="butt"
                d="M278,213L278,0"
              ></path>
              <path
                className="path7"
                strokeLinecap="butt"
                d="M139,213L139,425"
              ></path>
              <path
                className="path8"
                strokeLinecap="butt"
                d="M278,213L278,425"
              ></path>
            </g>
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
  );
}

export default Board;
