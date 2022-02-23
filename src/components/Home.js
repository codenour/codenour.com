import * as React from 'react';
function Home() {
  
  return (
    <div className="main">
      <div className="Home container">
        <div className="HomeText">
          <h1 className='container'>Web and Mobile Full Stack Developer.</h1>
          <div className='home-t'>
            <p>I am <strong style={{color:'#fff'}}>Ayman Jibrael</strong>, an Istanbul based software engineer with experience in medium and small projects. I specialize in backend & front-end for mobile and web-based applications with a focus on simplicity and usability.</p>
            <p>I’am using <a href="https://dotnet.microsoft.com/en-us/apps/aspnet">ASP.NET</a> Core MVC structure developed by <a href='https://www.microsoft.com'>Microsoft</a> and also <a href='https://reactjs.org/'>React JS </a>for web development. I use <a href='https://flutter.dev/'>Flutter</a> framework and <a href='https://developer.apple.com/xcode/swiftui/'>SwiftUI</a> interface for Mobile Application Development.</p>
          </div>
          <div className='home-links-list'>
            <ul className="home-links">
              <li><a href="https://www.youtube.com/c/AYMANNETT" title="YouTube"><i className="fa fa-youtube-play"></i></a></li>
              <li><a href="https://www.instagram.com/aymanjibrael/" title="Instagram"><i className="fa fa-instagram"></i></a></li>
              <li><a href="https://github.com/aymanjibrael" title="Github"><i className="icon icon-github"></i></a></li>
            </ul>
            <a className="btn" href="mailto:ayman.jibrael@icloud.com">Email me!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
