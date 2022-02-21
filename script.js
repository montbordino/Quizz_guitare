const FR = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];
const EN = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
const NB_QUESTION = 10;
let ecrit = "";

function quizz()
{
    for (let i = 1; i <= NB_QUESTION; i++){
        document.getElementById("question" + i).innerHTML = i;
    }
}

/* pour saisir du texte
window.addEventListener('keydown', (event) => {

    if (event.key == "r")
    {
        color = "red";
    }
    if (event.key == "ArrowLeft")
    {
        left -= vitesse;
    }
    if (event.key == "ArrowRight")
    {
        left += vitesse;
    }
})
*/