import React from "react";
import SarahKennedy from './SarahKennedy.jpg';
import './PhotoBio.css';

export default function PhotoBio() {
    return <div class="card mb-3 align-items-center" className="PhotoBioCard">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={SarahKennedy} class="img-fluid" alt="Sarah Kennedy" className="Headshot"/>
    </div>
    <div class="col-md-8">
      <div class="card-body" className="Bio">
        <h1 class="card-title">Sarah Kennedy</h1>
        <h2 class="card-text">Junior Frontend Developer</h2>
        <h3 class="card-text">React Javascript HTML/CSS</h3>
        <p class="card-text text-muted">Last updated 3 mins ago</p>
      </div>
    </div>
  </div>
</div>
};