import * as React from 'react';
import { useState } from 'react';
import Projects from './Projects';
import { Spring } from "react-spring";

function Home() {

  return (
    <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
    {(props) =>
      <div>
          <div className="row intro">
            <div className="column">CodeNour Web & Mobile Development Tutorials</div>
          </div><div className="row profile">
              <div className="column">
                <p>Currently I am the Software Engineer Director at
                  <a className="codenour" href="https://www.codenour.com"> CodeNour</a>.</p>
                <p>We intensively share Web and Mobile Programming Tutorials on our Social Media Accounts. To reach our web and mobile designs You can visit our
                  <a className="dribbble" href="https://www.dribbble.com/codenour"> Dribbble </a>Account.Check out our <a className="twitter" href="https://www.youtube.com/c/codenour"> YouTube </a> account to access our completely free tutorials.
                  You can follow our <a className="linkedin" href="https://twitter.com/codenour"> Twitter </a> and  <a className="linkedin" href="https://www.instagram.com/codenour_/"> Instagram </a> accounts for brief information and to be informed about new developments about the software.
                </p>
              </div>
            </div>
      </div>
    }
    </Spring>
  );
}

export default Home;

