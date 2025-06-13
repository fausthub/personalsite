import { useState } from 'react'
import './App.css'


 function App() {
  const [count, setCount] = useState(0);
  const [dark,  setDark]  = useState(false);

  const isFool  = dark;           // ← dark mode shows the Fool card
  const card    = isFool ? 'The Fool' : 'The World';

  const theWorld = '/theworld.png';  
  const theFool  = '/thefool.png';
  
  const toggleTheme = () => setDark(d => !d);
  const blurb   = isFool
  ? 'The Fool is numbered 0 – it’s pure potential, a leap of faith and the start of every journey.'
  : 'The World is numbered 21 – it’s completion, cosmic unity, and the joyful end of a cycle.';


  return (
  <div className="app-wrapper">
    <span className="blur-overlay" aria-hidden="true"></span>
    <div className={`background-layer ${dark ? 'dark' : ''}`} />

    <div className="content-layer">
      <div className="page-wrapper">
        <span className="tape tape-top-left" />
        <span className="tape tape-bottom-right" />

        <div className="page">
          <header className="main-box">
            <h2 className="page-title">REAGAN TRIMINIO</h2>

            <button
              className="theme-icon"
              onClick={toggleTheme}
              aria-label="Toggle dark / light mode"
            >
                <img
                  className="card-img"
                  src={dark ? theFool : theWorld}
                  alt=""
              />
            </button>
          </header>

          {/* dynamic info panels — only text changes */}
          <div className="info-box left">
            <h3>{card} </h3>
            <p>{blurb}</p>
          </div>

          <div className="info-box right">
            <h3>Quick Tip</h3>
            <p>
              {isFool
                ? 'Hover to hide / show. Click the card to return to the World.'
                : 'Hover to hide / show. Click the card to explore the Fool.'}
            </p>
          </div>
        </div>
      </div>

      {/* the counter + footer stay the same */}
      <div className="card">
        <button onClick={() => setCount(c => c + 1)}>count is {count}</button>
      </div>
      <p className="read-the-docs">This website is a work in progress.</p>
    </div>
  </div>
);
}
export default App;
