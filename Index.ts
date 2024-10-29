// index.ts
import { Player } from './Player';
import { Game } from './Game';
import { Battle } from './Battle';

// Création du jeu
const jeu = new Game();
jeu.afficherDeck(); // Afficher le deck complet avant de le mélanger
jeu.melanger();     // Mélanger le deck
console.log("Deck mélangé :");
jeu.afficherDeck(); // Afficher le deck mélangé

// Création des joueurs
const joueur1 = new Player("Player1");
const joueur2 = new Player("Player2");
const [cartesJoueur1, cartesJoueur2] = jeu.distribuer(); // Distribution des cartes
joueur1.ajouterCartes(cartesJoueur1); // Ajouter les cartes du joueur 1
joueur2.ajouterCartes(cartesJoueur2); // Ajouter les cartes du joueur 2

// Lancement de la bataille
const bataille = new Battle(joueur1, joueur2);

// Boucle de jeu
while (joueur1.getNombreDeCartes() > 0 && joueur2.getNombreDeCartes() > 0) {
    bataille.tour(); // Exécute un tour de jeu
}

// Fin de la partie
bataille.finDePartie();
