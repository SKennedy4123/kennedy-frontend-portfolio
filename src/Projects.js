import React from "react";
import './Projects.css';
import DictionaryApp from './DictionaryApp.png';
import WeatherApp from './WeatherApp.png';
import Travel from './ResponsiveTravel.png';

export default function Projects () {
    return (<div>
      <div class="row">
            <div class="col-sm-4">
    <div class="card shadow">
      <div class="card-body bg-light">
        <img src={Travel} class="card-img-top img-fluid img-thumbnail shadow-sm" alt="Travel Site" />
        <h5 class="card-title mt-2">Travel Site</h5>
        <p class="card-text">Responsive travel website built using Javascript</p>
        <a href="https://corningny.netlify.app/" target="_blank" rel="noreferrer" class="btn btn-outline-secondary">View Travel Site</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card shadow">
      <div class="card-body bg-light">
        <img src={DictionaryApp} class="card-img-top img-fluid img-thumbnail shadow-sm" alt="Dictionary App" />
        <h5 class="card-title mt-2">Dictionary App</h5>
        <p class="card-text">Built using React.js, incorporating dictionary and image APIs</p>
        <a href="https://dictionary-kennedy.netlify.app/" target="_blank" rel="noreferrer" class="btn btn-outline-secondary">View Dictionary App</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card shadow">
      <div class="card-body bg-light">
        <img src={WeatherApp} class="card-img-top img-fluid img-thumbnail shadow-sm" alt="Weather App" />
        <h5 class="card-title mt-2">Weather App</h5>
        <p class="card-text">Built using React.js, incorporating a weather API</p>
        <a href="https://kennedy-react-weather-app.netlify.app/" target="_blank" rel="noreferrer" class="btn btn-outline-secondary">View Weather App</a>
      </div>
    </div>
  </div>
</div>
</div>
    )}