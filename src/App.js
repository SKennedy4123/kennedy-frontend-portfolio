import SarahKennedy from './SarahKennedy.jpg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={SarahKennedy} className="Headshot" alt="Sarah Kennedy Headshot" />
        <h1>
          Sarah Kennedy
        </h1>
      </header>
    </div>
  );
}
