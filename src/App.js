import './App.css';
import './star.scss';
import Home from './components/Home';
import logo from './img/logo.svg';
import github from './img/github.svg';
import youtube from './img/youtube.svg';
import instagram from './img/instagram.svg';
import dribble from './img/dribble.svg';
import { Route, Routes, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Alert from './components/Alert';



function App() {


  return (
      <>   
      <div className='container'>
        <Alert />
        <div id='card' className='card'>
          <div className='row'>
            <div className='card-header'>
              <div className="column">
                <a className='beta'>Beta</a>
              </div>
              <div className="accounts">
                <a href=''><img src={github} /></a>
                <a href='https://www.youtube.com/c/codenour'><img src={youtube} /></a>
                <a href=''><img src={instagram} /></a>
                <a href=''><img src={dribble} /></a>
              </div>
            </div>
          </div>
          <div className='content'>
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/projects" element={ <Projects /> } />
            </Routes>
            </div>
            <hr />
            <p className='auth'>auth - <strong>AYMAN JIBRAEL</strong></p>
            <Nav />
        </div>
      </div>

    </>
  );
}

export default App;
