import React from 'react';
import './App.css';
import{Switch, Route} from 'react-router-dom';
import background from "./img/background.jpg";
import logo from "./img/logo.png"
import header from './img/header.png'
import Main from'./components/Main'

function App() {
  return (
      <div style={{backgroundImage: `url(${background})`, width:'100%', height: '1400px'}}>
          <img src ={logo} alt = "logo"  height='120px' width = '190px'/>
          <img src ={header} at ="header" style ={{marginLeft:'400px'}}/>
        <Switch>
          <Route exact path = '/'>
            <Main />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
