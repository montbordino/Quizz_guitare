const FR = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];
const EN = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
const NB_QUESTION = 10;
let reponse = "";
let pays;
let noteCode;
let i = 1;

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

function quizz()
{
    choisirPays(); //choisi un pays au hasard dans "pays"
    noteCode = Math.floor(Math.random() * 7); // noteCode est mtn un nombre entre 0 et 6
    let question = "l'équivalent de " + pays[noteCode] + " : "; // chois du message
    document.getElementById("q" + i).innerHTML = question; // affiche la question

    window.addEventListener('keydown', (event) => {

        if(event.key == "Backspace"){
            reponse = reponse.slice(0, -1);
            document.getElementById("q" + i).innerHTML = question + reponse;
        }
        else if(event.key == Enter){
            console.log("ca marche");
        }
        else
        {
            reponse += event.key;
            document.getElementById("q" + i).innerHTML += event.key; // affiche la réponse
        }
        console.log(reponse);
    })


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