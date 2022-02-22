// bug avec entrer/espace

const FR = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];
const EN = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
const NB_QUESTION = 10;

let reponse;
let question;
let resultat;
let reponseAttendue;

let pays;
let noteCode;

let start
let end;
let temps;

let i;

function traitTouche(e)
{
    if(e.key == "Backspace"){
        reponse = reponse.slice(0, -1); // suprime la dernière lettre
        document.getElementById("q" + i).innerHTML = question + reponse;
    }
    else
    {
        reponse += e.key;
        document.getElementById("q" + i).innerHTML += e.key; // affiche la réponse
    }   

    verifV();
}

function choisirPays()
{
    let paysCode = Math.floor(Math.random() * 2);
    if(paysCode === 0){
        pays = FR;
    }
    else{
        pays = EN;
    }
}

function defRep()
{
    if(pays == FR){
        reponseAttendue = EN[noteCode];
    }
    else{
        reponseAttendue = FR[noteCode];
    }
}

function verifV()
{
    if(reponse == reponseAttendue){
        document.getElementById("q" + i).className = "valide";

        i++;
        if (i >= 10){
            end = Date.now();
            temps = (end - start) / 1000;
            resultat = "bien joué, votre temps :" + temps +"s";
            document.getElementById("resultat").innerHTML = resultat;
            window.removeEventListener('keydown', traitTouche, false);
        }
        else{
            choisirPays(); //choisi un pays au hasard dans "pays"
            noteCode = Math.floor(Math.random() * 7); // noteCode est mtn un nombre entre 0 et 6
            defRep();
        
            question = "l'équivalent de " + pays[noteCode] + " : "; // chois du message
            document.getElementById("q" + i).innerHTML = question; // affiche la question
            reponse = "";
        }
    } 
}

function quizz()
{
    //initialisation
    start = Date.now();
    i = 0;
    reponse = "";

    choisirPays(); //choisi un pays au hasard dans "pays"
    noteCode = Math.floor(Math.random() * 7); // noteCode est mtn un nombre entre 0 et 6
    defRep();
    
    question = "l'équivalent de " + pays[noteCode] + " : "; // chois du message
    document.getElementById("q" + i).innerHTML = question; // affiche la question

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