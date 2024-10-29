// Game.ts
import { Card } from './Card';
import { Valeur } from './Valeur';

export class Game {
    protected cartes: Card[] = []; 

    constructor() {
        this.creerJeu();
        // this.melanger();
    }

    creerJeu(): void {
        const couleurs = ['Cœur', 'Carreau', 'Trèfle', 'Pique'];
        for (let valeur = 2; valeur <= 14; valeur++) {
            for (let couleur of couleurs) {
                this.cartes.push(new Card(new Valeur(valeur), couleur));
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
        const milieu = Math.ceil(this.cartes.length / 2);
        return [this.cartes.slice(0, milieu), this.cartes.slice(milieu)];
    }

    afficherDeck(): void {
        console.log("Deck complet de 52 cartes :");
        this.cartes.forEach(carte => console.log(carte.toString()));
    }
}
