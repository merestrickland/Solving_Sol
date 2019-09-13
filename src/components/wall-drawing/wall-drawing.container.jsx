import React, { Component, useState } from 'react';
import sketch from './wall-drawing.component';
import './wall-drawing.styles.scss'
import P5Wrapper from 'react-p5-wrapper';

const WallDrawing = props => {

    const [mouth, setMouth] = useState([520, 330, 100, 70, 0, 91.15])

    // const changeMouth = () => {
    //     console.log(mouth)
    //     if (mouth == [520, 330, 100, 70, 0, 91.15]) {
    //         console.log('yes')
    //     } else {
    //         console.log('no')
    //     }
    // }


    return (
        <div>

        
        <div className='wall_text'>
            <h2>Wall Drawing #17 (1969)</h2>
            <span>Four-part drawing with a different line direction in each part.</span>
        </div>
        <div className='sol'>
            <P5Wrapper sketch={sketch}></P5Wrapper>
        </div>
        </div>
        
    )
    
}

export default WallDrawing;