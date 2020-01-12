import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Photo from './components/Photo';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Wrapper>

        <Photo src="/profile.png" />

        <Title style={{

        color:'Cyan'

        }}>My name Here</Title>

        <Title small>My job</Title>


      </Wrapper>
    </div>
  );
}

export default App;
