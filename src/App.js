import React from 'react';
import './App.css';
import Menu from './components/Menu';
import About from './components/About';
import Home from './components/Home';
import Json from './components/Json';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Switch>
            <Route path = '/' exact component = { Home } />
            <Route path = '/about' component = { About } />
            <Route path = '/json' component = { Json } />

        </Switch>
     
        
     
      </div>
    </BrowserRouter>
   
  );
}

export default App;
