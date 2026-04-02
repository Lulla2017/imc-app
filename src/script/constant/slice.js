  // Configuration des tranches, couleurs et messages en français
  export const slices = [
    { max: 18.5, classe: "imc-result-maigreur", texte: "Insuffisance pondérale (Maigreur)" },
    { max: 25, classe: "imc-result-normal", texte: "Corpulence normale" },
    { max: 30, classe: "imc-result-surpoids", texte: "Surpoids" },
    { max: 35, classe: "imc-result-modere", texte: "Obésité modérée (Classe I)" },
    { max: 40, classe: "imc-result-severe", texte: "Obésité sévère (Classe II)" },
    { max: Infinity, classe: "imc-result-morbide", texte: "Obésité morbide ou massive (Classe III)" }
  ];
