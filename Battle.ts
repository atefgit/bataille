// Battle.ts
import { Player } from './Player';
import { Card } from './Card';

export class Battle {
    constructor(public joueur1: Player, public joueur2: Player) {}

    tour(): void {
        const carteJoueur1 = this.joueur1.jouerCarte();
        const carteJoueur2 = this.joueur2.jouerCarte();
        
        if (carteJoueur1 && carteJoueur2) {
            console.log(`${this.joueur1.nom} joue ${carteJoueur1.toString()}`);
            console.log(`${this.joueur2.nom} joue ${carteJoueur2.toString()}`);

            if (carteJoueur1.getValeur().valeur > carteJoueur2.getValeur().valeur) {
                this.joueur1.ajouterCartes([carteJoueur1, carteJoueur2]);
                console.log(`${this.joueur1.nom} remporte ce tour!`);
            } else if (carteJoueur2.getValeur().valeur > carteJoueur1.getValeur().valeur) {
                this.joueur2.ajouterCartes([carteJoueur1, carteJoueur2]);
                console.log(`${this.joueur2.nom} remporte ce tour!`);
            } else {
                console.log("Égalité! Les cartes sont mises de côté.");
            }
        }
    }

    finDePartie(): void {
        if (this.joueur1.getNombreDeCartes() === 0) {
            console.log(`${this.joueur2.nom} a gagné la partie!`);
        } else {
            console.log(`${this.joueur1.nom} a gagné la partie!`);
        }
    }
}
