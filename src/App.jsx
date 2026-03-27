import { useState } from 'react'
import './App.css'

function App() {
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [resultat, setResultat] = useState(null);

  // Configuration des tranches, couleurs et messages en Français
  const tranches = [
    { max: 18.5, classe: "imc-result-maigreur", texte: "Insuffisance pondérale (Maigreur)" },
    { max: 25, classe: "imc-result-normal", texte: "Corpulence normale" },
    { max: 30, classe: "imc-result-surpoids", texte: "Surpoids" },
    { max: 35, classe: "imc-result-modere", texte: "Obésité modérée (Classe I)" },
    { max: 40, classe: "imc-result-severe", texte: "Obésité sévère (Classe II)" },
    { max: Infinity, classe: "imc-result-morbide", texte: "Obésité morbide ou massive (Classe III)" }
  ];

  const calculerIMC = () => {
    const p = parseFloat(poids);
    const t = parseFloat(taille) / 100; // Conversion cm en mètres

    if (!p || !t || t <= 0) {
      alert("Veuillez entrer des valeurs valides pour le poids et la taille.");
      return;
    }

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
}

export default App;