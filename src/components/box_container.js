import React from "react";
import Button from "./button";
import Box from "./box";

export default function BoxContainer(props){

    const {newColor, color, pos} = props;

    const containerStyle ={
        display: 'inline-block',
        position: 'absolute',
        transitionDuration: "500ms",
        top: pos.top,
        left: pos.left
    }
    
    return (
        <div style={containerStyle}>
              <Button updateColor={newColor} />
              <Box color={color}/>         
        </div>    
    )
}