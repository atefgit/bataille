// Card.ts
import { Couleur } from './Couleur';
import { Valeur } from './Valeur';

export class Card {
    protected valeur: Valeur; 
    protected couleur: Couleur; 

    constructor(valeur: Valeur, couleur: Couleur) {
        this.valeur = valeur;
        this.couleur = couleur;
    }

    toString(): string {
        return `${this.valeur} de ${this.couleur}`;
    }

    public getValeur(): number {
        return this.valeur;
    }
}
