// 1 Créez un tableau contenant les nombres de 1 à 10. Écrivez un programme qui affiche chaque élément du tableau à la console. 
let tabNombres = [];
for (let i = 0; i <= 10; i++) {
    tabNombres.push(i);
}
console.log('- Exo 1');
for (nombre of tabNombres) {
    console.log(nombre);
}

// 2 Créez un tableau contenant les jours de la semaine. Écrivez un programme qui affiche le premier jour de la semaine à la console.
let tabJours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
console.log('- Exo 2');
for (jour of tabJours) {
    console.log(jour);
}

// 3 Créez un tableau contenant les nombres pairs de 2 à 10. Écrivez un programme qui calcule la somme des nombres du tableau et l'affiche à la console. 
let tabNombresPairs = [];
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        tabNombresPairs.push(i);
    }
}
somme = 0;
console.log('- Exo 3');
for (nombre of tabNombresPairs) {
    somme += nombre;
}
console.log(somme);

// 4 Créez un tableau contenant les noms de cinq fruits. Écrivez un programme qui ajoute un sixième fruit à la fin du tableau et affiche le tableau complet à la console.
let tabFruits = ['orange', 'pomme', 'cerise', 'pêche', 'fraise'];
console.log('- Exo 4');
tabFruits.push('grenade');
console.log(tabFruits);

// 5 Créez un tableau contenant les notes de cinq étudiants. Écrivez un programme qui calcule la moyenne des notes et l'affiche à la console. 

let tabEtudiants = [12, 10, 18, 8, 14];
console.log('- Exo 5');
let moyenne = 0;
for (note of tabEtudiants) {
    moyenne += note;
}
moyenne = moyenne / tabEtudiants.length;
console.log('Moyenne :', moyenne);

// 6 Créez un tableau contenant des noms d'oiseaux. Écrivez un programme qui recherche si un nom spécifique d'oiseau est présent dans le tableau. 
let tabOiseaux = ['rouge-gorge', 'colibri', 'pigeon', 'aigle', 'corbeau', 'buse', 'Edith'];
recherche = 'pigeon';
console.log('- Exo 6');
if (tabOiseaux.indexOf(recherche) !== -1) {
    console.log(recherche, "est dans le tableau.");
} else {
    console.log(recherche, "n'est pas dans le tableau.");
}

// 7 Créez un tableau contenant des noms de pays. Écrivez un programme qui trie le tableau par ordre alphabétique et l'affiche à la console
let tabPays = ['France', 'Italie', 'Japon', 'Angleterre', 'Maroc'];
console.log('- Exo 7');
tabPays.sort();
console.log(tabPays);

// 8 Créez un tableau contenant les noms des mois de l'année. Écrivez un programme qui affiche le troisième élément du tableau.
let tabMois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
console.log('- Exo 8');
console.log('Troisième mois :', tabMois[2]);

// 9 Créez un tableau contenant des nombres aléatoires. Écrivez un programme qui calcule la valeur minimale et la valeur maximale du tableau et les affiche à la console. 
let tabNombresRand = [];
for (let i = 0; i <= 10; i++) {
    tabNombresRand.push(Math.floor(Math.random() * 100));
}
console.log('- Exo 9');
console.log(tabNombresRand);
console.log('Min :', Math.min(...tabNombresRand));
console.log('Max :', Math.max(...tabNombresRand));

// 10 Créez un tableau contenant des phrases. Écrivez un programme qui cherche la phrase la plus longue du tableau et l'affiche à la console. 
tabPhrases = ['Bonjour', 'Bonjour, ca va', 'Ok', 'Ceci est un exercice JavaScript'];
phraseMax = '';
console.log('- Exo 10');
for (phrase of tabPhrases) {
    if (phrase.length >= phraseMax.length) {
        phraseMax = phrase;
    }
}
console.log('Phrase la plus longue :', phraseMax);