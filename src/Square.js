import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import Board from './Board';

function Square({value, onClick}){
    // let [state, setState] = useState('');

    // const handleOnClick = () => {
    //     setState(value)
    // }
    console.log(onClick)
    return(
        <button className="square" onClick={onClick}>{value}</button>
    )
}

export default Square;