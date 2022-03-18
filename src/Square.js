import React from 'react';
import ReactDOM from 'react-dom';

function Square({value, statusPlayer}){
    return(
        <button className="square" value={value}></button>
    )
}

export default Square;