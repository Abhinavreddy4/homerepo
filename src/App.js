import React from 'react';
import './App.css';
import Nav from './components/nav'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import profile from './components/profile';
import notifications from './components/notifications';
function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={profile}/>
      <Route path="/notifications" component={notifications}/>
      </Switch>
    </div>
    </Router>
  );
}
const Home =()=>(
  <div>
    <h1>Home Page!</h1>
  </div>
);
export default App;
