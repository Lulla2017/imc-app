import React from 'react';
import Input from './input';
import Button from './button';

const Form = ({
                  poids = '',
                  taille = '',
                  onPoidsChange = () => {},
                  onTailleChange = () => {},
                  onSubmit = () => {},
                  isLoading = false,
                  errors = {}
              }) => {
    return (
        <form className="imc-form" onSubmit={onSubmit}>
            <div className="imc-input-flex">
                <Input
                    id="taille"
                    type="number"
                    label="Taille"
                    placeholder="Entrez votre taille"
                    value={taille}
                    onChange={onTailleChange}
                    required
                    unit="cm"
                    min={50}
                    max={250}
                    step={0.1}
                    error={errors.taille}
                />
                <Input
                    id="poids"
                    type="number"
                    label="Poids"
                    placeholder="Entrez votre poids"
                    value={poids}
                    onChange={onPoidsChange}
                    required
                    unit="kg"
                    min={20}
                    max={500}
                    step={0.1}
                    error={errors.poids}
                />
            </div>
            <Button
                type="submit"
                disabled={isLoading}
                className="btn-calculate"
            >
                {isLoading ? 'Calcul en cours...' : 'Calculer'}
            </Button>
        </form>
    );
};

export default Form;
