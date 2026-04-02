import React, { useMemo } from 'react';
import Form from '../components/form';
import { useIMCCalculator } from '../hooks/useIMCCalculator';

const Home = () => {
    const {
        // State direct (plus lisible)
        poids,
        taille,
        resultat,
        isLoading,
        errors,
        // Setters
        setPoidsValue,
        setTailleValue,
        // Methods
        calculateIMC
    } = useIMCCalculator();

    const handleSubmit = (e) => {
        e.preventDefault();
        // ✅ Gérer le résultat de calculateIMC
        calculateIMC();
    };

    //Mémorisation du résultat pour éviter les appels multiples
    const resultatMemo = useMemo(() => resultat, [resultat]);

    return (
        <div className="divi-imc-wrapper">
            <div className="imc-container">
                <div className="imc-header">
                    <h2>Calculer votre IMC</h2>
                </div>
                <div className="imc-body-card">
                    <Form
                        poids={poids}
                        taille={taille}
                        onPoidsChange={(e) => setPoidsValue(e.target.value)}
                        onTailleChange={(e) => setTailleValue(e.target.value)}
                        onSubmit={handleSubmit}
                        isLoading={isLoading}
                        errors={errors}
                    />
                </div>
            </div>

            {resultatMemo && (
                <div className={`imc-result ${resultatMemo.classe}`}>
                    <p id="result" className="imc-value">{resultatMemo.valeur}</p>
                    <p id="explanation" className="imc-text">{resultatMemo.texte}</p>
                </div>
            )}
        </div>
    );
};

export default Home;


