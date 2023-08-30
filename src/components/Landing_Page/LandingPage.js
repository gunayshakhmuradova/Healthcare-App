import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <section className="hero-section">
      <div>
        <div data-aos="fade-up" className="flex-hero">
            
            <h1>
              Your Health<br/>

              <span className="text-gradient">
                
                Our Responsibility
              </span>
            </h1>
              <div class="blob-cont">
                  <div class="blue blob"></div>
              </div>
              <div class="blob-cont">
                  <div class="blue1 blob"></div>
              </div>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
            </h4>
            <a href="#services">
              <button class="button">Get Started</button>
            </a>
        </div>

      </div>
    </section>
  );
};

export default LandingPage;