const calculerIMC = (poids, taille) => {
    const p = parseFloat(poids);
    const t = parseFloat(taille) / 100; // Conversion cm en mètres

    if (!p || !t || t <= 0) {
      alert("Veuillez entrer des valeurs valides pour le poids et la taille.");
      return;
    } else{
      const imcValue = (p / (t * t)).toFixed(1);
      return; 
    }
}
export default calculerIMC