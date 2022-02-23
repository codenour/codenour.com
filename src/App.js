import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
// import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route  path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
  </Router>
  );
}

export default App;
