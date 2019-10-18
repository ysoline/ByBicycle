//Création diaporama présentation projet
 
//Automatisation du diaporama
var i = 0; //Point de départ
var images = ['img/bike1.jpeg', 'img/bike2.jpeg', 'img/bike3.jpeg']; //Création d'un tableau contenant les images
var time = 4000; //Valeur du temps après transition

function playImg() {

    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    id = setTimeout('playImg()', time);
}

window.onload = playImg;

function prevImg() {
    clearTimeout(id);
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    playImg();
}

function nextImg() {
    clearTimeout(id);
    i++;
    if (i >= images.length) {
        i = 0;
        playImg();
    }
}
function pauseImg() {
    clearTimeout(id);
}

