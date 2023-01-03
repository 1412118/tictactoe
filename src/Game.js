import Board from "./Board";
import React, { Fragment, useEffect, useState } from "react";
import BoardMobile from "./Mobile/BoardMobile";
import BoardTablet from "./Tablet/BoardTablet";

function Game() {
console.log("Game");
  const hideBottomBorder = {
    borderBottom: "1px solid black",
  };

  const statusDisplayBlock = {
    display: "block",
  };

  let winner_status = "";

  let [state, setState] = useState({
    history: [
      {
        squares: Array(9).fill(""),
        historyStatus: true,
      },
    ],
    //squares: Array(9).fill(''),
    xIsNext: true,
  });

  function handleOnClick(i) {
    const stateHistory = state.history;
    if (calculateWinner(stateHistory[stateHistory.length - 1].squares)) {
      return;
    }
    const squares = stateHistory[stateHistory.length - 1].squares.slice();
    if (squares[i] !== "") {
      return;
    }
    squares[i] = state.xIsNext ? "X" : "O";
    let historyStatus = !state.xIsNext;
    setState({
      history: stateHistory.concat([{ squares, historyStatus }]),
      //squares,
      xIsNext: !state.xIsNext,
    });
    //console.log(state.history);
  }

  function calculateWinner(squares) {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return "";
  }

  function changeStatus() {
    const history = state.history[state.history.length - 1];
    const winner = calculateWinner(history.squares);
    winner_status = winner;
    if (winner === "X") {
      return (
        <Fragment>
          <div style={statusDisplayBlock}>
            <div className="win win-x">{winner}</div>
            <div className="win">WIN!</div>
            <button
              className="restart-game"
              onClick={() => reRenderPastMove(0)}
            >
              Restart game
            </button>
          </div>
        </Fragment>
      );
    } else if (winner === "O") {
      return (
        <Fragment>
          <div style={statusDisplayBlock}>
            <div className="win win-o">{winner}</div>
            <div className="win">WIN!</div>
            <button
              className="restart-game"
              onClick={() => reRenderPastMove(0)}
            >
              Restart game
            </button>
          </div>
        </Fragment>
      );
    } else {
      //return 'Next Player: ' + (state.xIsNext ? 'X' : 'O');
      if (state.xIsNext === true) {
        return (
          <Fragment>
            <div className="stt stt-x">X</div>
            <div className="stt stt-o" style={hideBottomBorder}>
              O
            </div>
          </Fragment>
        );
      } else {
        return (
          <Fragment>
            <div className="stt stt-x" style={hideBottomBorder}>
              X
            </div>
            <div className="stt stt-o">O</div>
          </Fragment>
        );
      }
    }
  }

  function reRenderPastMove(index) {
    const history = state.history.slice(0, index + 1);
    //console.log(history);
    setState({
      history,
      xIsNext: history[index].historyStatus,
    });
  }

  function renderBoard() {
    if (winner_status === "") {
      if (windowSize.innerWidth >= 1007) {
        return (
          <Board
            squares={state.history[state.history.length - 1].squares}
            onClick={(i) => handleOnClick(i)}
          />
        );
      } else if (windowSize.innerWidth < 1007 && windowSize.innerWidth >= 640) {
        return (
          <BoardTablet
            squares={state.history[state.history.length - 1].squares}
            onClick={(i) => handleOnClick(i)}
          />
        );
      }
      else if(windowSize.innerWidth < 640){
        return (
            <BoardMobile
              squares={state.history[state.history.length - 1].squares}
              onClick={(i) => handleOnClick(i)}
            />
          );
      }
    } else {
      return <Fragment></Fragment>;
    }
  }
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };
  const [windowSize, setWindowSize] = useState(getWindowSize);

  const resizeWindow = () => {
    setWindowSize(getWindowSize);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);
  return (
    <Fragment>
      <div className="status-board">
        <div className="status">{changeStatus()}</div>
        {/* <Board 
                    squares={state.history[state.history.length - 1].squares}
                    onClick={(i) => handleOnClick(i)}
                /> */}
        {renderBoard()}
      </div>
      <div className="his-steps">
        <div className="his-steps-title">History Steps</div>
        <ul>
          {state.history.map((e, index) => {
            const desc = index ? "Go to step " + index : "Go to start game";
            return (
              <li key={index} onClick={() => reRenderPastMove(index)}>
                {desc}
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}

export default Game;
