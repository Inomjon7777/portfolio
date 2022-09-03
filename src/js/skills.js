import React from "react";
//css papkasini ichidagi skills.css fayli import qilindi
import "../css/skills.css";

// images papkasini ichidagi skills papkasini ichidan rasmlar import qilindi
import speaking from "../images/skills/skills-speaking.png";
import writing from "../images/skills/skills-writing.png";
import reading from "../images/skills/skills-reading.png";
import listening from "../images/skills/skills-listening.png";

export default class Skills extends React.Component {
  render() {
    return (
      // skills started
      <section className="skills" id="skills">
        <div className="container">
          <h1 className="skills-title">Skills</h1>
          <div className="skills-boxes">
            {/* speaking-box */}
            <div className="speaking-box">
              <div className="speaking-box-banner">
                <img
                  className="speaking-box-banner-img"
                  src={speaking}
                  alt="Img not found"
                />
              </div>
              <div className="speaking-box-word">
                <h1 className="speaking-box-word-title">Speaking</h1>
                <p className="speaking-box-word-description">
                  Improve your English skills and confidence. Live classes and
                  interactive lessons online. 20% extra free for a limited time
                  only Improve your English skills and confidence. Live classes
                  and interactive lessons online. 20% extra free for a limited
                  time only Improve your English skills and confidence. Live
                  classes and interactive lessons online. 20% extra free for a
                  limited time only
                  <br /> <br /> Learn English online and improve your skills
                  through our high-quality courses and resources – all designed
                  for adult language learners. Learn English online and improve
                  your skills through our high-quality courses and resources –
                  all designed for adult language learners. Learn English online
                  and improve your skills through our high-quality courses and
                  resources – all designed for adult language learners.
                </p>
                <button className="speaking-box-word-btn">Learn more</button>
              </div>
            </div>
            {/* writing-box */}
            <div className="writing-box">
              <div className="writing-box-banner">
                <img
                  className="writing-box-banner-img"
                  src={writing}
                  alt="Img not found"
                />
              </div>
              <div className="writing-box-word">
                <h1 className="writing-box-word-title">Writing</h1>
                <p className="writing-box-word-description">
                  One of the most important and extensive areas of natural
                  science, the science that studies substances, also their
                  composition
                </p>
                <button className="writing-box-word-btn">Learn more</button>
              </div>
            </div>
            {/* reading-box */}
            <div className="reading-box">
              <div className="reading-box-banner">
                <img
                  className="reading-box-banner-img"
                  src={reading}
                  alt="Img not found"
                />
              </div>
              <div className="reading-box-word">
                <h1 className="reading-box-word-title">Reading</h1>
                <p className="reading-box-word-description">
                  perception and response actions of the user resulting from the
                  use and/or upcoming use of the product, system or service
                </p>
                <button className="reading-box-word-btn">Learn more</button>
              </div>
            </div>
            {/* listening-box */}
            <div className="listening-box">
              <div className="listening-box-banner">
                <img
                  className="listening-box-banner-img"
                  src={listening}
                  alt="Img not found"
                />
              </div>
              <div className="listening-box-word">
                <h1 className="listening-box-word-title">Listening</h1>
                <p className="listening-box-word-description">
                  Here you can find activities to practise your listening
                  skills. Listening will help you to improve your understanding
                </p>
                <button className="listening-box-word-btn">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      // skills ended
    );
  }
}
