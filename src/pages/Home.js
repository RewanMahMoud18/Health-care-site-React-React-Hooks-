import React from "react";
import homeImage from "../Assets/images/home-img.png";
import "../pages/Home.css";
import animatedImage1 from "../Assets/images/animatedImage1.png";
import animatedImage2 from "../Assets/images/animatedImage2.png";
import animatedImage3 from "../Assets/images/animatedImage3.png";
import animatedImage5 from "../Assets/images/animatedImage5.png";

function Home() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 home-desc">
            <img className="animation-img" src={animatedImage3} />
            <h5>We Provide All Health Care Solution</h5>
            <h1>Protect Your Health And Take Care To Of Your Health</h1>
            <button>
              <a href="#">Read more</a>
            </button>
            <img className="animation-img" src={animatedImage1} />
          </div>
          <div className="col-md-6 col-lg-6">
            <img className="animation-img" src={animatedImage5} />

            <img src={homeImage} />
            <img className="animation-img" src={animatedImage2} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;