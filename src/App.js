import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Home from './components/Home/home';
import Player from './components/Player/player';
import AboutUs from './components/AboutUs/aboutus';
import Rules from './components/Rules/rules';
import MultiPlayer from './components/MultiPlayer/multiplayer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {

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
                {/* <Route path="/singleplayer" exact component={Player} />
                <Route path="/multiplayer" exact component={MultiPlayer} /> */}
              </Switch>
            </Router>
          </div>
        <div className="footer"><Footer/></div>
      </div>
    );
  }

export default App;
