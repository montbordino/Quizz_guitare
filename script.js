const FR = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];
const EN = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
const NB_QUESTION = 10;
let ecrit = "";
let i = 1;
let pays;
let noteCode;

function choisirPays()
{
    let paysCode = Math.floor(Math.random() * 2);
    if(paysCode === 0){
        pays = "FR";
    }
    else{
        pays = "EN";
    }
    console.log(pays);
}


function quizz()
{    
    window.addEventListener('keydown', (event) => {
        ecrit += event.key;
        if (event.key == "Enter")
        {
            i++;
            ecrit = "";
            console.log(i);
        }
        else
        {
            document.getElementById("q" + i).innerHTML = ecrit;
        }
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