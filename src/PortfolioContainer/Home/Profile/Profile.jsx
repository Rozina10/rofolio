import React from "react";
import "./Profile.css";
import { TypeAnimation } from "react-type-animation"

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/rozina-mehmood-59a150286/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/@webdevelopergirl">
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-test">
              {""}
              Heloo, I'M <span className="highlighted-text">Rozina</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <TypeAnimation
                  speed={{ type: 'keyStrokeDelayInMs', value: 60 }}

                  repeat={Infinity}
                  sequence={[
                    "Website Developer 💻",
                    2000,
                    "Frontend Web Developer 💻",
                    2000,
                    "React.js Developer 💻",
                    2000,
                  ]}
                  deletionSpeed={1}
                  className="text-transition"
                />
              </h1>
              <span className="profile-role-tagline">
                Proficient in building responsive and interactive front-end
                websites with clean and efficient code.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="https://www.linkedin.com/in/rozina-mehmood-59a150286/">
              <button className="btn primary-btn">
                {""}
                Hire Me{" "}
              </button>
            </a>
            <a href="Rozina CV.pdf" download="Rozina CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
          <div />
        </div>
      </div>
    </div>
  );
}

