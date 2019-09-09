import React, { Component, useState } from 'react';
import sketch from './wall-drawing.component';
import P5Wrapper from 'react-p5-wrapper';

const WallDrawing = props => {

    const [mouth, setMouth] = useState([520, 330, 100, 70, 0, 91.15])

    const changeMouth = () => {
        console.log(mouth)
        if (mouth == [520, 330, 100, 70, 0, 91.15]) {
            console.log('yes')
        } else {
            console.log('no')
        }
    }


    return (
        <div onClick={changeMouth}>
            <P5Wrapper sketch={sketch}></P5Wrapper>
        </div>
        
    )
    
}

export default WallDrawing;