import React from "react"
import "../../css/styles.css"
import "../../css/animation.css"

export default function Home() {
  return (
    <div>
      <div className="wrapper-home dark">
        <div class="item">
          <div>
            Hi, I am &nbsp;
            {/* <span className="name">Surya Pratap Singh</span> */}
            <span className="name">S</span>
            <span className="name">u</span>
            <span className="name">r</span>
            <span className="name">y</span>
            <span className="name">a</span> &nbsp;
            <span className="name">P</span>
            <span className="name">r</span>
            <span className="name">a</span>
            <span className="name">t</span>
            <span className="name">a</span>
            <span className="name">p</span> &nbsp;
            <span className="name">S</span>
            <span className="name">i</span>
            <span className="name">n</span>
            <span className="name">g</span>
            <span className="name">h</span>
            <br />
            Fullstack developer during the day. Learner & Startup Enthusiast
            during the night!{" "}
          </div>
        </div>

        <div className="home-button text-center">
          <a href="https://www.linkedin.com/in/suryathakur15/">
            <button class="custom-btn btn-12">
              <span>Click!</span>
              <span>Read More</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
