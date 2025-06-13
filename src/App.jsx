import { useState } from 'react'
import './App.css'


 function App() {
  const [count, setCount] = useState(0);
  const [dark,  setDark]  = useState(false);

  const theWorld = '/theworld.png';  
  const theFool  = '/thefool.png';

  const toggleTheme = () => setDark(d => !d);

  return (
    <div className="app-wrapper">
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
                  src={dark ? theFool : theWorld}
                  alt=""
                  width={280}
                />
              </button>
            </header>
          </div>
        </div>

        <div className="card">
          <button onClick={() => setCount(c => c + 1)}>count is {count}</button>
        </div>
        <p className="read-the-docs">This website is a work in progress.</p>
      </div>
    </div>
  );
}
export default App;
