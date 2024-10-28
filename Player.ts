// Player.ts
import { Card } from './Card';

export class Player {
    protected cartes: Card[] = []; // Attribut protected

    constructor(public nom: string) {}

    jouerCarte(): Card | null {
        return this.cartes.pop() || null;
    }

    ajouterCartes(cartes: Card[]): void {
        this.cartes.push(...cartes);
    }

    
    public getCartes(): Card[] {
        return this.cartes;
    }

    // Méthode pour définir les cartes
    public setCartes(cartes: Card[]): void {
        this.cartes = cartes;
    }

    // Méthode pour obtenir le nombre de cartes
    public getNombreDeCartes(): number {
        return this.cartes.length;
    }
}
