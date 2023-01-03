import React from 'react';
import { Fragment } from 'react';

function SquareMobile(props){
    // const hideSVG = {
    //     visibility: "hidden"
    // };

    // const showSVG = {
    //     visibility: "visible"
    // }

    function getValue(){
        console.log('value: ' + props.value);
        if(props.value === 'X'){
            return <Fragment>
                <svg className="player-x lines">
                    <g fill="none" stroke="#ff5643" strokeWidth="6">
                        <path className="path1" strokeLinecap="butt" d="M80,80L13,13"/>
                        <path className="path2" strokeLinecap="butt" d="M13,80L80,13" />
                    </g>
                </svg>
            </Fragment>
        }
        else if(props.value === 'O'){
            return <Fragment>
                <svg className="player-o lines">
                    <g fill="none" stroke="#3ab1f3" strokeWidth="6">
                        <path className="path1" strokeLinecap="butt" d="M48,12A30,30 0 1,0 48,82A30,30 0 1,0 48,12"/>
                    </g>
                </svg>
            </Fragment>
        }
    }

    return(
        <td className="squ" onClick={props.onClick}>{getValue()}</td>
        // <td className="squ" onClick={props.onClick}>
        //     <svg className="player-x lines">
        //         <g fill="none" stroke="#fff" strokeWidth="6">
        //             <path className="path1" strokeLinecap="butt" d="M100,100L20,20"/>
        //             <path className="path2" strokeLinecap="butt" d="M20,100L100,20" />
        //         </g>
        //     </svg>
        //     <svg className="player-o lines">
        //         <g fill="none" stroke="#fff" strokeWidth="6">
        //             <path className="path1" strokeLinecap="butt" d="M58,16A35,35 0 1,0 58,100A35,35 0 1,0 58,16"/>
        //         </g>
        //     </svg>
        // </td>
    )
}

export default SquareMobile;