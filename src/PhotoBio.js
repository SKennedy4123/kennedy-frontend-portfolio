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
            <p class="mb-5">In addition to being a junior frontend developer, I am an experienced music teacher of 11 years, and a small business owner providing custom designed sugar cookie art. Superb communication, organization, and customer service skills are qualities I bring to any work environment.
            </p>
            <a href="mailto:skennedy4123@gmail.com" type="button" class="btn btn-outline-secondary">Work with me!</a>
            <p class="mt-5"><strong>Skills: </strong>React.js, Javascript, HTML, CSS, API, SEO, GitHub, Netlify, AI, Git, Bootstrap, Visual Studio Code, Responsive, Hosting, npm</p>
            <h2 class="mt-5">See my work samples:</h2>
            </div>
        </div>
        <div class="col-lg-6 mt-2 mb-5">
          <img src={SarahKennedy} alt="Sarah Kennedy" class="img-fluid" className="Headshot" />
        </div>
      </div>
    </div>
};