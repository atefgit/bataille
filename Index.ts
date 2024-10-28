// index.ts
import { Player } from './Player';
import { Game } from './Game';
import { Battle } from './Battle';

// Création du jeu et des joueurs
const jeu = new Game();
jeu.afficherDeck(); // Afficher le deck complet
jeu.melanger();     // Mélanger le deck
jeu.afficherDeck(); // Afficher le deck mélangé

const joueur1 = new Player("Alice");
const joueur2 = new Player("Bob");
const [cartesJoueur1, cartesJoueur2] = jeu.distribuer(); // Distribution des cartes
joueur1.setCartes(cartesJoueur1); // Définir les cartes du joueur 1
joueur2.setCartes(cartesJoueur2); // Définir les cartes du joueur 2

const bataille = new Battle(joueur1, joueur2);

// Boucle de jeu
while (joueur1.getNombreDeCartes() > 0 && joueur2.getNombreDeCartes() > 0) {
    bataille.tour(); // Exécute un tour de jeu
}

// Fin de la partie
bataille.finDePartie();
