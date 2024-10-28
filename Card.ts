// Card.ts
import { Valeur } from './Valeur';

export class Card {
    protected valeur: Valeur; 
    protected couleur: string; 

    constructor(valeur: Valeur, couleur: string) {
        this.valeur = valeur;
        this.couleur = couleur;
    }

    toString(): string {
        return `${this.valeur.toString()} de ${this.couleur}`;
    }

    // Méthode pour obtenir la valeur
    public getValeur(): Valeur {
        return this.valeur;
    }
}
