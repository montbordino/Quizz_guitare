const FR = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];
const EN = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
const CarSpec = ['Tab', 'Control', 'Shift','Alt', 'AltGraph',
                 'Dead', 'Insert', 'CapsLock', 'Meta', 'MediaPlayPause'];
const NB_QUESTION = 10;

let reponse;
let question;
let resultat;
let reponseAttendue;

let actif = false;

let pays;
let noteCode;

let start
let end;
let temps;

let i;

function traitTouche(e) { //traite la saisie de l'utilisateur
    if (e.key == "Backspace") {
        reponse = reponse.slice(0, -1); // suprime la dernière lettre
        document.getElementById("p" + i).innerHTML = question + reponse;
    }
    else if (reponse.length >= 25){
        reponse = "TROP GROS !";
        document.getElementById("p" + i).innerHTML = question + reponse;
    }
    else if (!(CarSpec.includes(e.key))){
        reponse += e.key;
        document.getElementById("p" + i).innerHTML += e.key; // affiche la réponse
    }

    verifV();
}

function choisirPays() { // choisis un pays entre FR et EN
    let paysCode = Math.floor(Math.random() * 2);
    if (paysCode === 0) {
        pays = FR;
    }
    else {
        pays = EN;
    }
}

function defRep() { // détermine la reponse attendue 
    if (pays == FR) {
        reponseAttendue = EN[noteCode];
    }
    else {
        reponseAttendue = FR[noteCode];
    }
}

function finPartie() {
    end = Date.now();
    temps = (end - start) / 1000;
    resultat = "bien joué, votre temps :" + temps + "s";
    document.getElementById("resultat").innerHTML = resultat;
    document.getElementById("resultat").className = "affiché";
}

function verifV() {
    if (reponse == reponseAttendue) {
        document.getElementById("p" + i).className = "valide";

        i++;
        if (i >= 10) {
            finPartie();
        }
        else {
            choisirPays(); //choisi un pays au hasard dans "pays"
            noteCode = Math.floor(Math.random() * 7); // noteCode est mtn un nombre entre 0 et 6
            defRep();

            question = "l'équivalent de " + pays[noteCode] + " : "; // choix du message
            document.getElementById("p" + i).innerHTML = question; // affiche la question
            document.getElementById("p" + i).className = "question";
            reponse = "";
        }
    }
}

function reinit() {
    window.removeEventListener('keydown', traitTouche, false);
    for (let n = NB_QUESTION - 1; n >= 0; n--) {
        document.getElementById("p" + n).innerHTML = "";
        document.getElementById("p" + n).className = "None";

        document.getElementById("resultat").innerHTML = "";
        document.getElementById("resultat").className = "None";
    }
}

function quizz() {
    //initialisation
    if (actif) { reinit(); }
    actif = true;
    start = Date.now();
    i = 0;
    reponse = "";

    choisirPays(); //choisi un pays au hasard dans "pays"
    noteCode = Math.floor(Math.random() * 7); // noteCode est mtn un nombre entre 0 et 6
    defRep();

    question = "l'équivalent de " + pays[noteCode] + " : "; // choix du message
    document.getElementById("p" + i).innerHTML = question; // affiche la question
    document.getElementById("p" + i).className = "question";

    window.addEventListener('keydown', traitTouche, false);
}

/*

// pour ecrire du texte
document.getElementById("question" + i).innerHTML = ecrit + " | ";

// pour saisir du texte
window.addEventListener('keydown', (event) => {

    if (event.key == "r")
    {
        color = "red";
    }

})
*/