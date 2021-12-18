import React from 'react';
import './App.css';
import Trafik from './components/Trafik';
import './components/TarifS.scss';



class App extends React.Component {
  render() {
    return (
    <div className='App'>
        <Trafik />
      </div>
  );
  }
  
}

export default App;
