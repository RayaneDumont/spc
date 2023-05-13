import './index.scss';
import logo from './logo-spc.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className='logo-spc' src={logo} ></img>
      </header>
      <div className='spc-container'>
        <div className='pad'>
          Kick
        </div>

        <div className='pad'>
          Snare
        </div>

        <div className='pad'>
          Hi-hat
        </div>

        <div className='pad'>
          Clap
        </div>

        <div className='pad'>
          Roll Hat
        </div>

        <div className='pad'>
          Hi-Hat
        </div>

        <div className='pad'>
          808
        </div>

        <div className='pad'>
          Sound 2
        </div>

        <div className='pad'>
          Sound 2
        </div>
      </div>
    </div>
  );
}

export default App;
