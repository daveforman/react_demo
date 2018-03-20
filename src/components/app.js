import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {genRandomColor, genRandomPos} from '../helpers';
import Button from './button';
import BoxContainer from "./box_container";

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            boxes:[
                {
                    color: "red",
                    pos: genRandomPos()
                },
                {
                    color: "blue",
                    pos: genRandomPos()
                },
                {
                    color: "green",
                    pos: genRandomPos()
                },
                {
                    color: "black",
                    pos: genRandomPos()
                },
                {
                    color: "violet",
                    pos: genRandomPos()
                },
                {
                    color: "hotpink",
                    pos: genRandomPos()
                }
            ]
        };

        this.changeColor = this.changeColor.bind(this);
    }
        changeColor(index){
             const newBoxes =this.state.boxes.slice();
             newBoxes[index].color = genRandomColor();
             newBoxes[index].pos = genRandomPos();
             this.setState({
                 boxes: newBoxes
             });
           
    }

    render(){
        const boxElements = this.state.boxes.map((item, index)=>{
                return <BoxContainer key={index} pos={item.pos} newColor={() => this.changeColor(index)} color={item.color}/>
        });

        return (
                <div className="container">
                    <h1 className="text-center my-3">Components Demo</h1>
                    <Button updateColor={this.changeColor}/>
                    {boxElements}
                </div>
        );
    }
}

export default App;
