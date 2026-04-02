import { slices } from '../constant/slice.js';

export const calculerIMC = (poids, taille) => {
    const p = parseFloat(poids);
    const t = parseFloat(taille) / 100; // Conversion cm en mètres

    // Validation des entrées
    if (!p || !t || p <= 0 || t <= 0) {
        console.error("Veuillez entrer des valeurs valides pour le poids et la taille.");
        return null;
    }

    // Calcul de l'IMC
    const imcValue = (p / (t * t)).toFixed(1);

    // Recherche de la tranche correspondante
    const info = slices.find(tr => imcValue < tr.max) || slices[slices.length - 1];

    return {
        valeur: imcValue,
        classe: info.classe,
        texte: info.texte
    };
};

export default calculerIMC