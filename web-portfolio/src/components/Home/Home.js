import React from "react";
import "./Home.scss";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Junior Web Developer</h1>
              <p>
                "Hi, I'm Webster Navarro. A passionate Web Developer Based in
                Manila, Philippines."
              </p>
              <span>
                <a aria-label="github" href="https://github.com/webzxx">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  aria-label="linkedin"
                  href="https://linkedin.com/in/webster-navarro"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </span>
            </div>
            <div className="hero-img"></div>
          </div>
          <div className="skills">
            <p>Tech Stack</p>
            <div className="logos"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
