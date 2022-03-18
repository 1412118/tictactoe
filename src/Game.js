import Board from "./Board";

function Game(){
    let status_player = 'X';
    return (
        <Board statusPlayer={status_player}/>
    )
}

export default Game;