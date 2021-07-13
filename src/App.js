import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Home from './components/Home/home';
import Player from './components/Player/player';
import AboutUs from './components/AboutUs/aboutus';
import Rules from './components/Rules/rules';
import MultiPlayer from './components/MultiPlayer/multiplayer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


window.client = new WebSocket('ws://0.0.0.0:8081');

class App extends Component {
  componentDidMount() {
    window.client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    window.client.onmessage = ({message}) => {
      console.log(message);
    };
  }

  render() {

    return (
      <div className="App">
        <div className="body">
            <Router>
              <Header/>
              <Switch >
                <Route path="/" exact component={Home}/>
                <Route path="/rules" exact component={Rules} />
                <Route path="/aboutus" exact component={AboutUs} />
                <Route path="/singleplayer" exact component={Player} />
                <Route path="/multiplayer" exact component={MultiPlayer} />
              </Switch>
            </Router>
          </div>
        <div className="footer"><Footer/></div>
      </div>
    );
  }
}

export default App;
