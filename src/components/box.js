import React from "react";

export default function(props){

    console.log("Box Props: ", props)

    const boxStyle = {
        display: "inline-block",
        height: '400px',
        width: "400px",
        backgroundColor: props.color,
        transitionDuration: "500ms",
        margin: "15px"
    }
    
    return <div style={boxStyle}/>
}