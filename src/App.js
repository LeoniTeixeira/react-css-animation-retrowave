import React from 'react';
import './App.css';
import Canyon from './assets/img/canyon.svg'
import Mountain from './assets/img/mountain.svg'
import Tree from './assets/img/tree.svg'
import Cactus from './assets/img/cactus.svg'
import Star from './assets/img/star.svg'

function App() {
  return (
    <div className="sky">
      <img className="star" src={Star}></img>
      <div className="name-container">
        <div className="new">
          <div className="letter">oEstranho</div>
        </div>
        <div className="retro">
          <div className="letter">SEM</div>
        </div>
        
        <div className="wave">Nome</div>
      </div>
      <div className="inner-wrapper">
        <div className="landscape"></div>
      </div>
      <div className="sun"/>
      <img className="mountain" src={Mountain}></img>
      <img className="canyon" src={Canyon}></img>
      <div className="decoration-container">
        <img className="cactus" src={Cactus}></img>
        <img className="tree" src={Tree}></img>
        <img className="cactus" src={Cactus}></img>
        <div/>
        <div/>
        <img className="cactus" src={Cactus}></img>
        <img className="tree" src={Tree}></img>
        <img className="cactus" src={Cactus}></img>
      </div>
      <div className="ground"/>
    </div>
  );
}

export default App;
