import React from "react";
import SarahKennedy from './SarahKennedy.jpg';
import './PhotoBio.css';

export default function PhotoBio() {
    return <div class="content-container container mt-5 mb-5" >
      <div class="row">
        <div class="col-lg-6">
          <div class="content">
            <h1 class="mt-5 mb-4" className="Name">SARAH KENNEDY</h1>
            <h2 class="mb-4">Junior Frontend Developer</h2>
            <h3 class="mb-4">React • Javascript • HTML • CSS</h3>
            <p class="mb-4">As a junior frontend developer, I offer 1 year of coding experience coupled with an extensive
background in education and entrepreneurship. Transitioning from teaching to frontend development
demonstrates my adaptability, eagerness for new challenges, and commitment to growth, leveraging my
diverse background to offer fresh perspectives and technical proficiency. With 11 years of a music educator
and 3 years as a small business owner creating custom design sugar cookie art, I bring a wealth of
practical skills including superb communication, organization, and customer service.
            </p>
            <a href="mailto:skennedy4123@gmail.com" type="button" class="btn btn-outline-secondary">Work with me!</a>
            <p class="mt-4"><strong>Skills: </strong>React.js, Javascript, HTML, CSS, API, npm, Search Engine Optimization, Object-Oriented Programming, GitHub, Netlify, AI, Git, Bootstrap, Visual Studio Code, Responsive Web Design, Website Hosting<div><strong>Currently learning:</strong> Python</div></p>
            <h2 class="mt-4">See my work samples:</h2>
            </div>
        </div>
        <div class="col-lg-6 mt-2 mb-5">
          <img src={SarahKennedy} alt="Sarah Kennedy" class="img-fluid" className="Headshot" />
        </div>
      </div>
    </div>
};