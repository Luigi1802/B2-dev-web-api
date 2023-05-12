# Notes du cours
*Luigi AUBRY-POUGET*

## JS
NodeJS -> executer du JavaScript en tant que language serveur

node --version

node [chemin du fichier js] -> executer un code JS

variables : 
const pour une constante
sinon let

pas var, pour avoir plus de contrôle sur la portée de ses variables

structure minimale d'une fonction : () => {}
() et {} sont faculatifs s'il y a 1 seul paramètre ou 1 seule instruction

pour parcourir un tableau : au lieu de faire un for of, on peut utilisier la méthode
forEach (et remettre une fonction à l'intérieur)

... = rest operator/spread operator

## API

API -> pc/serveur contenant une application disponible en ligne à laquelle on peut faire des requetes formatées pour recuperer des ressources

données renvoyées souvent en JSON ou XML

api REST -> ensemble de regles, conventions, contraintes -> representational state transfer : Standard de construction des APIs
exemple : une API REST est stateless -> les communiquants (API et clients n'ont pas à stocker d'infos sur l'autre, chaque requete est INDÉPENDANTE (pas multiples requetes pour accéder à une ressource)
voir standards rest

diverses ressources disponibles via diverses URI -> Uniform Resource Identifier

format : verb /resource 
(/resource = URI)

verb : GET, POST, PATCH, DELETE, PUT, ...

headers : metadonnées associées à une requete HTTP (exemples : Accept, Authorization, Body...)
Accept : format de réponse demandé (json, ...)
Autorisation : preuve du droit d'effectuer la requette (access token)

Réponse à la requête :

requete HTTP avec un status code
- 2XX -> réussite (la ressource a été envoyée)
- 3XX -> redirection
- 4XX -> erreur du client (requete incorrecte)
- 5XX -> erreur du serveur

Logiciels d'utilisation d'API : 
- Postman
- Insomnia

sinon CURL (requetes sur terminal)