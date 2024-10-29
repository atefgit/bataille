// Battle.ts
import { Player } from './Player';
import { Card } from './Card';

export class Battle {
    private joueur1: Player; 
    private joueur2: Player;
    private manche: number = 0; 

    constructor(joueur1: Player, joueur2: Player) {
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
    }

    private comparerCartes(carteJoueur1: Card, carteJoueur2: Card): void {
        console.log(`Player1 joue : ${carteJoueur1.toString()}`);
        console.log(`Player2 joue : ${carteJoueur2.toString()}`);

        if (carteJoueur1.getValeur() > carteJoueur2.getValeur()) {
            this.joueur1.ajouterCartes([carteJoueur1, carteJoueur2]);
            console.log(`Player1 remporte la manche !`);
        } else if (carteJoueur2.getValeur() > carteJoueur1.getValeur()) {
            this.joueur2.ajouterCartes([carteJoueur1, carteJoueur2]);
            console.log(`Player2 remporte la manche !`);
        } else {
            console.log("Égalité! Les cartes sont mises de côté.");
        }
    }

    public tour(): void {
        const carteJoueur1 = this.joueur1.jouerCarte();
        const carteJoueur2 = this.joueur2.jouerCarte();

        this.manche++; 
        console.log(`-----Player1 : ${this.joueur1.getNombreDeCartes()}------- Manche ${this.manche} -----Player2 : ${this.joueur2.getNombreDeCartes()}-------`);

        if (carteJoueur1 && carteJoueur2) {
            this.comparerCartes(carteJoueur1, carteJoueur2);
        }
    }

    public finDePartie(): void {
        if (this.joueur1.getNombreDeCartes() === 0) {
            console.log(`${this.joueur2.nom} a gagné la partie!`);
        } else {
            console.log(`${this.joueur1.nom} a gagné la partie!`);
        }
    }
}
