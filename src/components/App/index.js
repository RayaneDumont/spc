import './index.scss';
import logo from './logo-spc.png'
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
      <audio ref={soundRef} src={selectedSound} preload="none" />
      <header className="App-header">
        <img className='logo-spc' src={logo} ></img>
      </header>
      <div className='spc-container'>
        <div className='pad drums'
            onClick={() => handleSelectedSound(kickSound)}
            preload="auto" // Mettez à jour cette ligne
            onCanPlayThrough={() => setIsLoaded(true)}
        >
          Kick
        </div>

        <div className='pad drums' 
             onClick={() => handleSelectedSound(snareSound)}
             preload="auto" // Mettez à jour cette ligne
             onCanPlayThrough={() => setIsLoaded(true)}
        >
          Snare
        </div>

        <div className='pad drums'
             onClick={() => handleSelectedSound(hihatSound)}
             preload="auto" // Mettez à jour cette ligne
             onCanPlayThrough={() => setIsLoaded(true)}
        >
          Hi-hat
        </div>

        <div className='pad drums' 
             onClick={() => handleSelectedSound(clapSound)}
             preload="auto" // Mettez à jour cette ligne
             onCanPlayThrough={() => setIsLoaded(true)}
        >
          Clap
        </div>

        <div className='pad drums' 
             onClick={() => handleSelectedSound(rollhatSound)}
             preload="auto" // Mettez à jour cette ligne
             onCanPlayThrough={() => setIsLoaded(true)}
        >
          Roll Hat
        </div>

        <div className='pad perc' 
             onClick={() => handleSelectedSound(voxSound)}
             preload="auto" // Mettez à jour cette ligne
             onCanPlayThrough={() => setIsLoaded(true)}
        >
          Vox
        </div>

        <div className='pad bass808' 
             onClick={() => handleSelectedSound(bass808Sound)}
             preload="auto" // Mettez à jour cette ligne
             onCanPlayThrough={() => setIsLoaded(true)}
        >
          808
        </div>

        <div className='pad sound' 
             onClick={() => handleSelectedSound(sound1)}
             preload="auto" // Mettez à jour cette ligne
             onCanPlayThrough={() => setIsLoaded(true)}
        >
          Sound 2
        </div>

        <div className='pad sound' 
             onClick={() => handleSelectedSound(sound2)}
             preload="auto" // Mettez à jour cette ligne
             onCanPlayThrough={() => setIsLoaded(true)}
        >
          Sound 2
        </div>
      </div>
    </div>
  );
}

export default App;
