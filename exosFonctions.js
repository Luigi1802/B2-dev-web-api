// 1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.
const somme = (nb1, nb2) => {return nb1 + nb2}
console.log(`- Exo 1 : somme(14, 4) = ${somme(14,4)}`);

// 2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.
function plusGrand(tableau) {
    return Math.max(...tableau);
}
console.log(`- Exo 2 : plusGrand([18, 20, 0, 3, 96]) = ${plusGrand([18, 20, 0, 3, 96])}`);

// 3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées. 
function queConsonnes(string) {
    string = string.replace(/[aeiouy]/gm, '');
    return string;
}
console.log(`- Exo 3 : queConsonnes('alligator') = ${queConsonnes('alligator')}`);

// 4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.
function triAlpha(tableau) {
    return tableau.sort();
}
console.log(`- Exo 4 : triAlpha(['baleine', 'vipère', 'alligator', 'scarabée', 'mulot']) = ${triAlpha(['baleine', 'vipère', 'alligator', 'scarabée', 'mulot'])}`);

// 5 Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".
function numberToLetters(number) {
    let stringNumber = number.toString();
    let unites = ['zéro','un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
    let dizaines = ['dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix', 'cent'];
    let apresDix = ['onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
    if (stringNumber.length === 1) {
        return unites[number];
    } else if (number % 10 === 0 && number > 0 && number <= 100) {
        return dizaines[number/10-1];
    } else if (number < 20 && number > 10) {
        return apresDix[number-11];
    } else if ((number > 19 && number < 70) || (number > 80 && number < 90)) {
        if (number%10 !== 1) {
            return `${dizaines[Number(stringNumber[0])-1]}-${unites[number%10]}`;
        } else {
            return `${dizaines[Number(stringNumber[0])-1]}-et-un`;
        }
    } else if (number > 70 && number < 100) {
        if (number%10 !== 1) {
            return `${dizaines[Number(stringNumber[0])-2]}-${apresDix[number%10-1]}`;
        } else if (number === 91) {
            return `${dizaines[Number(stringNumber[0])-2]}-${apresDix[number%10-1]}`;
        } else {
            return `${dizaines[Number(stringNumber[0])-2]}-et-${apresDix[number%10-1]}`;
        }
    } else if (number > 100) {
        return 'Nombres supérieurs à cent non pris en compte.'
    }
}
console.log(`- Exo 5 :`);
console.log(`numberToLetters('7') = ${numberToLetters('7')}`);
console.log(`numberToLetters('18') = ${numberToLetters('18')}`);
console.log(`numberToLetters('96') = ${numberToLetters('96')}`);
console.log(`numberToLetters('71') = ${numberToLetters('71')}`);
console.log(`numberToLetters('42') = ${numberToLetters('42')}`);
console.log(`numberToLetters('100') = ${numberToLetters('100')}`);
console.log(`numberToLetters('150') = ${numberToLetters('150')}`);

// 6 Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet. 
function getObj(tabObj, property) {
    tabProperties = [];
    for (Obj of tabObj) {
        if (Obj.hasOwnProperty(property)) {
            tabProperties.push(Obj[property]);
        }
    }
    return tabProperties;
}
tabObjets = [{nom:'Luigi'}, {nom:'Quentin', age:19}, {age:43}];
console.log(`- Exo 6 : getObj(tabObjets) = [${getObj(tabObjets, 'nom')}]`);

// 7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.
const triDec = (tableau) => {tableau = tableau.sort((x, y) => x - y); return tableau.reverse();};
console.log(`- Exo 7 : triDec([3,2,6,56,34]) = [${triDec([3,2,6,56,34])}]`);

// 8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules. 
function majVoyelles(string) {
    let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    newString = '';
    for (char of string) {
        if (voyelles.indexOf(char) !== -1) {
            newString += char.toUpperCase();
        } else {
            newString += char;
        }
    }
    return newString;
}
console.log(`- Exo 8 : majVoyelles('Bonjour') = ${majVoyelles('Bonjour')}`);

// 9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.
const countVoyelles = (string) => {return (string.match(/[aeiouy]/gm) || []).length;};
console.log(`- Exo 9 : countVoyelles('Bonjour') = ${countVoyelles('Bonjour')}`);

// 10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.
function majConsonnes(string) {
    let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    newString = '';
    for (char of string) {
        if (voyelles.indexOf(char) === -1) {
            newString += char.toUpperCase();
        } else {
            newString += char;
        }
    }
    return newString;
}
console.log(`- Exo 8 : majConsonnes('Bonjour') = ${majConsonnes('Bonjour')}`);