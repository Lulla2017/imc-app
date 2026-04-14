import { useState, useCallback } from 'react';
import { calculerIMC } from '../script/calc/imc.js';


export const useIMCCalculator = () => {
    const [poids, setPoids] = useState("");
    const [taille, setTaille] = useState("");
    const [resultat, setResultat] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    // ✅ SETTERS
    const setPoidsValue = useCallback((value) => {
        setPoids(value);
    }, []);

    const setTailleValue = useCallback((value) => {
        setTaille(value);
    }, []);

    const setResultatValue = useCallback((value) => {
        setResultat(value);
    }, []);

    const setErrorsValue = useCallback((value) => {
        setErrors(value);
    }, []);

    const setLoadingValue = useCallback((value) => {
        setIsLoading(value);
    }, []);

    // ✅ VALIDATION
    const validateInputs = useCallback(() => {
        const newErrors = {};

        if (!taille || parseFloat(taille) <= 0) {
            newErrors.taille = "Veuillez entrer une taille valide (> 0)";
        }
        if (!poids || parseFloat(poids) <= 0) {
            newErrors.poids = "Veuillez entrer un poids valide (> 0)";
        }

        return newErrors;
    }, [poids, taille]);

    // ✅ CALCUL IMC -
    const calculateIMC = useCallback(() => {
        const validationErrors = validateInputs();
        setErrorsValue(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return false;
        }

        setLoadingValue(true);

        try {
            const result = calculerIMC(poids, taille);
            if (result) {
                setResultatValue(result);
                setErrorsValue({});
                return true;
            } else {
                setResultatValue(null);
                setErrorsValue({
                    taille: "Les valeurs ne sont pas valides",
                    poids: "Veuillez réessayer"
                });
                return false;
            }
        } catch (error) {
            console.error("Erreur lors du calcul:", error);
            setErrorsValue({
                global: "Une erreur est survenue lors du calcul"
            });
            return false;
        } finally {
            setLoadingValue(false);
        }
    }, [poids, taille, validateInputs, setErrorsValue, setResultatValue, setLoadingValue]);

    // ✅ RESET
    const resetForm = useCallback(() => {
        setPoids("");
        setTaille("");
        setResultat(null);
        setErrors({});
        setIsLoading(false);
    }, []);

    return {
        // Setters
        setPoidsValue,
        setTailleValue,
        setResultatValue,
        setErrorsValue,
        setLoadingValue,
        // Methods
        calculateIMC,
        resetForm,
        validateInputs,
        // State (pour accès direct si nécessaire)
        poids,
        taille,
        resultat,
        isLoading,
        errors
    };
};

