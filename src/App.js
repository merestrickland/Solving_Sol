import React from 'react';
import './App.css';
import WallDrawing from '../src/components/wall-drawing/wall-drawing.container'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import HomePage from '../src/containers/homepage/homepage.container'
import sketch from '../src/components/wall-drawing/wall-drawing.component'
import P5Wrapper from 'react-p5-wrapper';

function App() {
  return (
    <div className="App">
      
      <WallDrawing/>
    </div>
    
  );
}

export default App;
