// Déplacer les aiguilles 
//function demarrerLaMontre() {

function demarrerLaMontre (a) {

// Séléctionner les aiguilles de montre
    
    const AIGUILLEHR = document.querySelector("#hour");
    const AIGUILLEMIN = document.querySelector("#minute");
    const AIGUILLESEC = document.querySelector("#second");

    //Extraire l'heure actuelle à l'aide de l'objet Date()
        // extraction de l'heure de la date actuelle au format HH:MM:SS
    let time = new Date().toLocaleTimeString("fr"); 
        // isoler les H/M/S séparé par les ":" dans un tableau
    let splitHour = time.split(":");

    //Stocker l'heure , minute , seconde  dans des variables
    let hour = splitHour[0];
    let minute = splitHour[1];
    let seconde = splitHour[2];

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

    let degreHour = (hour * 30) + (minute/2);
    let degreMinute = (minute * 6);
    let degreSeconde = (seconde * 6); 
   
// Application d'une transformation à notre objet en permettant la rotation en fonction des degrés calculés
AIGUILLEHR.style.transform = "rotate(" + degreHour +'deg)';
AIGUILLEMIN.style.transform = "rotate(" + degreMinute +'deg)';
AIGUILLESEC.style.transform = "rotate(" + degreSeconde +'deg)';
console.log(AIGUILLESEC.style.transform);

};

// appeler la fonction
demarrerLaMontre();

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);






