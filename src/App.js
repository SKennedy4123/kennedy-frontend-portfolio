import './App.css';
import Email from './Email.png';
import LinkedIn from './LinkedIn.png';
import GitHub from './GitHub.png';
import Resume from './Resume.png';
import pdf from './Sarah Kennedy Frontend Resume.pdf';

export default function App() {
  return (
<nav class="navbar navbar-light bg-light fixed-top">
  <div class="container-fluid justify-content-end">
    <span class="navbar-brand mb-0 h1">Sarah Kennedy</span>
    <a class="navbar-nav me-3" href="mailto:skennedy4123@gmail.com">
      <img src={Email} alt="skennedy4123@gmail.com" width="34" />
    </a>
    <a class="navbar-nav me-3" href="https://www.linkedin.com/in/sarah-kennedy-02b2b6293/" target="_blank" rel="noreferrer">
      <img src={LinkedIn} alt="LinkedIn" width="30" />
    </a>
    <a class="navbar-nav me-3" href="https://github.com/SKennedy4123" target="_blank" rel="noreferrer">
      <img src={GitHub} alt="GitHub" width="30" />
    </a>
    <a class="navbar-nav me-3" href={pdf} target="_blank" rel="noreferrer">
      <img src={Resume} alt="Resume" width="30" />
    </a>
  </div>
</nav>
  );
}