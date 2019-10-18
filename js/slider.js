var Slider = function Slide(target, table, repertory, time) {

    this.target = document.getElementById(target);    //récupère la cible
    this.table = table, //déclare un tableau
        this.repertory = repertory,//indique le répertoire
        this.time = time,//temps de transition
        this.addimage = -1,//incrémentation

        this.autoplay(); //fonction pause
}
Slider.prototype.autoplay = function () {
    this.addimage++ ,
        this.target.src = this.repertory + this.table[this.addimage] + '.jpeg';
    if (this.addimage == this.table.length - 1) {
        this.addimage = -1
    }
    let that = this;
    this.timeout = setTimeout(function () { that.autoplay() }, this.time);
} //this représenterais la page. Utilisation d'une variable intermédiaire

Slider.prototype.pause = function () {
    clearTimeout(this.timeout);
    this.time = null;
}

Slider.prototype.next = function () {
    this.addimage++;
    if (this.addimage > (this.table.length - 1)) {
        this.addimage = 0;
    }
    this.target.src = this.repertory + this.table[this.addimage] + '.jpeg';
    clearTimeout(this.timeout);
    this.time = null;
}
Slider.prototype.preview = function () {
    this.addimage--;
    if (this.addimage <= 0) {
        this.addimage = this.table.length - 1;
    }
    this.target.src = this.repertory + this.table[this.addimage] + '.jpeg';
    clearTimeout(this.timeout);
    this.time = null;
}



let images = ['bike1', 'bike2', 'bike3'];

let mySlider = new Slider('diapo', images, 'img/', 5000);

//typeof window.addEventListener == 'undefined' ? window.attachEvent("onload", initslider) : window.addEventListener("load", initslider, false);

//interraction : bouton cliquer
$('#pauseBtn').on('click', function () {
    mySlider.pause();
})
$('#nextBtn').on('click', function () {
    mySlider.next();
})
$('#prevBtn').on('click', function () {
    mySlider.preview();
})