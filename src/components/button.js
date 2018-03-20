import React from "react";

export default props => {

    function handleClick(){
        console.log("Button Clicked!");
        props.updateColor();
    }

    return <button className="btn-lg btn-block btn-outline-danger" onClick={handleClick}>DO NOT <p>Click Me</p></button>;
}