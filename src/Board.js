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
                className="path path1"
              ></path>
              <path
                className="path path2"
              ></path>
              <path
                className="path path3"
              ></path>
              <path
                className="path path4"
              ></path>
              <path
                className="path path5"
              ></path>
              <path
                className="path path6"
              ></path>
              <path
                className="path path7"
              ></path>
              <path
                className="path path8"
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
