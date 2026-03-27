import { useState } from 'react'
import './App.css'

function App() {
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [resultat, setResultat] = useState(null);

  // Configuration des tranches et messages
  const tranches = [
    { max: 18.5, classe: "imc-result-maigreur", texte: "Insuffisance pondérale : Le poids est considéré comme trop bas. Consultez votre médecin." },
    { max: 25, classe: "imc-result-normal", texte: "Corpulence normale : Le poids est proportionnel à la taille, pas de souci particulier." },
    { max: 30, classe: "imc-result-surpoids", texte: "Surpoids : Un léger surpoids, une activité physique peut aider à retrouver un poids de forme." },
    { max: 35, classe: "imc-result-modere", texte: "Obésité modérée (stade 1) : Cet état peut avoir des conséquences sur la santé." },
    { max: 40, classe: "imc-result-severe", texte: "Obésité sévère (stade 2) : Un suivi médical est recommandé." },
    { max: Infinity, classe: "imc-result-morbide", texte: "Obésité morbide (stade 3) : Risques importants, un accompagnement médical est nécessaire." }
  ];

  const calculerIMC = () => {
    const p = parseFloat(poids);
    const t = parseFloat(taille) / 100;

    if (!p || !t || t <= 0) {
      alert("Entrez des valeurs valides !");
      return;
    }

    const imcValue = (p / (t * t)).toFixed(2);
    // On trouve la bonne tranche
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
          <h2>Calcola il tuo BMI</h2>
        </div>
        <div className="imc-body-card">
          <div className="imc-input-flex">
            <input 
              type="number" 
              placeholder="Dimensioni (cm)" 
              value={taille}
              onChange={(e) => setTaille(e.target.value)}
            />
            <input 
              type="number" 
              placeholder="Peso (kg)" 
              value={poids}
              onChange={(e) => setPoids(e.target.value)}
            />
          </div>
          <button onClick={calculerIMC}>Calcolare</button>
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