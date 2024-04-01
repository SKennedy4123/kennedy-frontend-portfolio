import React from "react";
import SarahKennedy from './SarahKennedy.jpg';
import './PhotoBio.css';

export default function PhotoBio() {
    return <div class="content-container container" >
      <div class="row">
        <div class="col-lg-6">
          <div class="content">
            <h1 class="mb-4">Sarah Kennedy</h1>
            <h2 class="mb-4">Junior Frontend Developer</h2>
            <h2 class="mb-4">React Javascript HTML/CSS</h2>
            <p class="mb-5">In addition to being a junior frontend developer, I am an experienced music teacher of 11 years, and a small business owner. Superb communication, organization, and customer service skills are qualities I bring to any work environment
            </p>
            <a href="mailto:skennedy4123@gmail.com" type="button" class="btn btn-outline-secondary">Work with me</a>
            </div>
        </div>
        <div class="col-lg-6">
          <img src={SarahKennedy} alt="Sarah Kennedy" class="img-fluid" className="Headshot" />
        </div>
      </div>
    </div>
};