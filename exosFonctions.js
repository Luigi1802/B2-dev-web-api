// 1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.
function somme(nb1, nb2) {
    return nb1 + nb2;
}
console.log(`- Exo 1 : somme(14, 4) = ${somme(14,4)}`);

// 2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.
function plusGrand(tableau) {
    return Math.max(...tableau);
}
console.log(`- Exo 2 : plusGrand([18, 20, 0, 3, 96]) = ${plusGrand([18, 20, 0, 3, 96])}`);

// 3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées. 
function queConsonnes(string) {
    string.replace(/aeiouy/i, '');
    return string;
}
console.log(`- Exo 3 : queConsonnes('alligator') = ${queConsonnes('alligator')}`);