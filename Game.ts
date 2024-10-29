// Game.ts
import { Card } from './Card';
import { Couleur } from './Couleur';
import { Valeur } from './Valeur';

export class Game {
    protected cartes: Card[] = []; // Attribut protected

    constructor() {
        this.creerJeu();
        this.melanger();
    }

    creerJeu(): void {
        for (let couleur in Couleur) {
            if (isNaN(Number(couleur))) { // Vérifie que ce n'est pas un index numérique
                for (let valeur in Valeur) {
                    if (!isNaN(Number(valeur))) { // Vérifier si la valeur est un nombre
                        this.cartes.push(new Card(Valeur[valeur as keyof typeof Valeur], Couleur[couleur as keyof typeof Couleur]));
                    }
                }
            }
        }
    }

    melanger(): void {
        for (let i = this.cartes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cartes[i], this.cartes[j]] = [this.cartes[j], this.cartes[i]]; // Échange
        }
    }

    distribuer(): [Card[], Card[]] {
        // Distribution de 26 cartes à chaque joueur
        const joueur1Cartes = this.cartes.slice(0, 26);
        const joueur2Cartes = this.cartes.slice(26, 52);
        return [joueur1Cartes, joueur2Cartes];
    }

    afficherDeck(): void {
        console.log("Deck complet de 52 cartes :");
        this.cartes.forEach(carte => console.log(carte.toString()));
    }
}
