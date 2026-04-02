import React from 'react'
import AppRouter from './Router.jsx'
import { useState } from 'react'
import {calculerIMC} from '../script/calc/imc.js'
import '../style/App.css'


function App() {

  return(
    <div id="form__Wrapper">
      <AppRouter />
    </div>
  );
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [resultat, setResultat] = useState(null);



  

    const imcValue = (p / (t * t)).toFixed(1); // Une seule décimale comme souvent demandé
    
    // Recherche de la tranche correspondante
    const info = tranches.find(tr => imcValue < tr.max) || tranches[tranches.length - 1];
    
    setResultat({
      valeur: imcValue,
      classe: info.classe,
      texte: info.texte
    });
  };

  return (
    <div className="divi-imc-wrapper">
      <div className="imc-container">
        <div className="imc-header">
          <h2>Calculer votre IMC</h2>
        </div>
        <div className="imc-body-card">
          <div className="imc-input-flex">
            <input 
              type="number" 
              placeholder="Taille (cm)" 
              value={taille}
              onChange={(e) => setTaille(e.target.value)}
            />
            <input 
              type="number" 
              placeholder="Poids (kg)" 
              value={poids}
              onChange={(e) => setPoids(e.target.value)}
            />
          </div>
          <button onClick={calculerIMC}>Calculer</button>
        </div>
      </div>

      {resultat && (
        <div className={`imc-result ${resultat.classe}`}>
          <p id="result">{resultat.valeur}</p>
          <p id="explanation">{resultat.texte}</p>
        </div>
      )}
    </div>
  );

export default App;