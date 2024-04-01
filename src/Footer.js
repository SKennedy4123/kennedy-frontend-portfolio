import React from "react";
import "./Footer.css";
import Email from './Email.png';
import LinkedIn from './LinkedIn.png';
import GitHub from './GitHub.png';
import Resume from './Resume.png';
import pdf from './Sarah Kennedy Frontend Resume.pdf';

export default function Footer () {
    return (
    <div className="Contact">
    <ul>
    <li><h2 class="mt-5 mb-3">Contact Sarah:</h2></li>
    <li><a href="mailto:skennedy4123@gmail.com" target="_blank" rel="noreferrer" class="btn btn-outline-secondary me-2 mb-2"><img src={Email} alt="skennedy4123@gmail.com" width="34" class="me-1" />Email</a>
    <a href="mailto:skennedy4123@gmail.com" rel="noreferrer">SKennedy4123@gmail.com</a></li>
    
    <li><a href="https://www.linkedin.com/in/sarah-kennedy-02b2b6293/" target="_blank" rel="noreferrer" class="btn btn-outline-secondary me-2 mb-2"><img src={LinkedIn} alt="LinkedIn" width="30" class="me-1" />LinkedIn</a>
    <a href="https://www.linkedin.com/in/sarah-kennedy-02b2b6293/" rel="noreferrer">LinkedIn.com/in/Sarah-Kennedy-02b2b6293/</a></li>
    
    <li><a href="https://github.com/SKennedy4123" target="_blank" rel="noreferrer" class="btn btn-outline-secondary me-2 mb-2"><img src={GitHub} alt="GitHub" width="30" class="me-1" />GitHub</a>
    <a href="https://github.com/SKennedy4123" rel="noreferrer">GitHub.com/SKennedy4123</a></li>
    
    <li><a href={pdf} target="_blank" rel="noreferrer" class="btn btn-outline-secondary me-2"><img src={Resume} alt="Resume" width="30" class="me-1" />Resume</a>
    <a href={pdf} target="_blank" rel="noreferrer">Sarah Kennedy Frontend Developer Resume</a></li>

</ul>
    <div className="Footer"><em>This page was coded by <a href="https://www.linkedin.com/in/sarah-kennedy-02b2b6293/" target="_blank" rel="noreferrer">Sarah Kennedy</a>, open-sourced on <a href="https://github.com/SKennedy4123" target="_blank" rel="noreferrer">GitHub</a>, and hosted on Netlify.</em></div>
    </div>)}