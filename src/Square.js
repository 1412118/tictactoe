import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import Board from './Board';

function Square(props){
    console.log(props)
    return(
        <button className="square" onClick={props.onClick}>{props.value}</button>
    )
}

export default Square;