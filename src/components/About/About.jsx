import React from "react";
import "./about.css";
import Feature from "../Feature/Feature";
const About = () => {
  return (
    <div>
      <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        <div className="gpt3__whatgpt3-feature">
          <Feature
            title="About Us"
            text="NTRA Defnse Technologies is a SAUDI company, leading in ‏development and designing and manufacturing Autonomous Systems and Advance Technologies ,We provide advanced technological solutions that cater to diverse sectors. "
          />
        </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient__text">
            Driving Tomorrows Technologies, Today
          </h1>
          {/* <p>With a team of highly skilled experts, Our innovative solutions are built to cater to the needs of various clients, providing them with a competitive edge in their respective industries. we prioritize quality, efficiency, and innovation, making us a reliable partner.</p> */}
        <div className=" gpt3__whatgpt3 section__margin gpt3__whatgpt3-feature"> 
        <Feature text="With a team of highly skilled experts, Our innovative solutions are built to cater to the needs of various clients, providing them with a competitive edge in their respective industries. we prioritize quality, efficiency, and innovation, making us a reliable partner." />
        </div>
        </div>
        <div className="gpt3__whatgpt3-container">
          <Feature
            title="A subtitle here"
            text="Innovating the future of autonomous technologies 
            "
          />
          <Feature
            title="Vision"
            text="To revolutionize the way the world operates through the power of autonomous technologies. 
            "
          />
          <Feature
            title="Mission"
            text="To deliver the greatest value to our customers, partners, and stakeholders, while maintaining world-class standards of professionalism, integrity, and social responsibility.
            "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
