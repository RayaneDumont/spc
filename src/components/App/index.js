import './index.scss';
import logo from './logo-spc.png'
import portfolioIcon from './portfolio-bag.svg';
import React,{ useState, useEffect, useRef } from 'react';
import kickSound from './sounds/kick.wav';
import snareSound from './sounds/snare.wav'
import hihatSound from './sounds/hi-hat.wav';
import rollhatSound from './sounds/roll-hat.wav';
import clapSound from './sounds/clap.wav';
import voxSound from './sounds/vox.wav';
import bass808Sound from './sounds/bass808.wav';
import sound1 from './sounds/sound1.wav'
import sound2 from './sounds/sound2.wav'

function App() {
  const [selectedSound, setSelectedSound] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const soundRef = useRef(null);
  const currentSoundRef = useRef(null);

  const [keyPressed, setKeyPressed] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'a') {
        setKeyPressed(event.key);
        handleSelectedSound(kickSound);
      } else if (event.key === 'z') {
        setKeyPressed(event.key);
        handleSelectedSound(snareSound);
      } else if (event.key === 'e') {
        setKeyPressed(event.key);
        handleSelectedSound(hihatSound);
      } else if (event.key === 'q') {
        setKeyPressed(event.key);
        handleSelectedSound(clapSound);
      } else if (event.key === 's') {
        setKeyPressed(event.key);
        handleSelectedSound(rollhatSound);
      } else if (event.key === 'd') {
        setKeyPressed(event.key);
        handleSelectedSound(voxSound);
      } else if (event.key === 'w') {
        setKeyPressed(event.key);
        handleSelectedSound(bass808Sound);
      } else if (event.key === 'x') {
        setKeyPressed(event.key);
        handleSelectedSound(sound1);
      } else if (event.key === 'c') {
        setKeyPressed(event.key);
        handleSelectedSound(sound2);
      }
    };

    const handleKeyUp = (event) => {
      if (
        event.key === 'a' ||
        event.key === 'z' ||
        event.key === 'e' ||
        event.key === 'q' ||
        event.key === 's' ||
        event.key === 'd' ||
        event.key === 'w' ||
        event.key === 'x' ||
        event.key === 'c'
      ) {
        setKeyPressed(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleSelectedSound = async (sound) => {
    if (currentSoundRef.current) {
      currentSoundRef.current.pause();
    }
  
    setSelectedSound(sound);
    setIsLoading(true);
    currentSoundRef.current = soundRef.current;
    soundRef.current.src = sound;
  
    try {
      await soundRef.current.load();
      await soundRef.current.play();
    } catch (error) {
      console.log('Une erreur s\'est produite lors de la lecture du son :', error);
    }
  };

  return (
    <div className="App">
      <audio ref={soundRef} src={selectedSound} preload="auto" />
      <header className="App-header">
        <img className='logo-spc' src={logo} ></img>
        <p className='social-medias'>
          <img className='portfolio-icon' 
               src={portfolioIcon}
               >
          </img> 
            <a href='https://rayanedumont-portfolio.surge.sh/' target='_blank'>Portfolio</a>
        </p>
      </header>
      <div className='spc-container'>
        <div className={`pad drums ${keyPressed === 'a' ? 'active' : ''}`}
            onClick={() => handleSelectedSound(kickSound)}
            preload="auto" // Mettez à jour cette ligne
            onCanPlayThrough={() => setIsLoaded(true)}
        >
          <p>Kick</p>
          <p className='keypress'>Press A</p>
        </div>

        <div className={`pad drums ${keyPressed === 'z' ? 'active' : ''}`}
             onClick={() => handleSelectedSound(snareSound)}
             preload="auto" // Mettez à jour cette ligne
             onCanPlayThrough={() => setIsLoaded(true)}
        >
          <p>Snare</p>
          <p className='keypress'>Press Z</p>
        </div>

        <div className={`pad drums ${keyPressed === 'e' ? 'active' : ''}`}
             onClick={() => handleSelectedSound(hihatSound)}
             preload="auto" // Mettez à jour cette ligne
             onCanPlayThrough={() => setIsLoaded(true)}
        >
          <p>Hi-Hat</p>
          <p className='keypress'>Press E</p>
        </div>

        <div className={`pad drums ${keyPressed === 'q' ? 'active' : ''}`}
             onClick={() => handleSelectedSound(clapSound)}
             preload="auto" // Mettez à jour cette ligne
             onCanPlayThrough={() => setIsLoaded(true)}
        >
          <p>Clap</p>
          <p className='keypress'>Press Q</p>
        </div>

        <div className={`pad drums ${keyPressed === 's' ? 'active' : ''}`}
             onClick={() => handleSelectedSound(rollhatSound)}
             preload="auto" // Mettez à jour cette ligne
             onCanPlayThrough={() => setIsLoaded(true)}
        >
          <p>Roll Hat</p>
          <p className='keypress'>Press S</p>
        </div>

        <div className={`pad perc ${keyPressed === 'd' ? 'active' : ''}`}
             onClick={() => handleSelectedSound(voxSound)}
             preload="auto" // Mettez à jour cette ligne
             onCanPlayThrough={() => setIsLoaded(true)}
        >
          <p>Vox</p>
          <p className='keypress'>Press D</p>
        </div>

        <div className={`pad bass808 ${keyPressed === 'w' ? 'active' : ''}`}
             onClick={() => handleSelectedSound(bass808Sound)}
             preload="auto" // Mettez à jour cette ligne
             onCanPlayThrough={() => setIsLoaded(true)}
        >
          <p>808</p>
          <p className='keypress'>Press W</p>
        </div>

        <div className={`pad sound ${keyPressed === 'x' ? 'active' : ''}`}
             onClick={() => handleSelectedSound(sound1)}
             preload="auto" // Mettez à jour cette ligne
             onCanPlayThrough={() => setIsLoaded(true)}
        >
          <p>Sample 1</p>
          <p className='keypress'>Press X</p>
        </div>

        <div className={`pad sound ${keyPressed === 'c' ? 'active' : ''}`}
             onClick={() => handleSelectedSound(sound2)}
             preload="auto" // Mettez à jour cette ligne
             onCanPlayThrough={() => setIsLoaded(true)}
        >
          <p>Sample 2</p>
          <p className='keypress'>Press C</p>
        </div>
      </div>
    </div>
  );
}

export default App;
