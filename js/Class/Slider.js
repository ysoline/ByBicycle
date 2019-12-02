class Slider {

    constructor(target, table, repertory, time) {
        this.target = document.getElementById(target); //récupère la cible
        this.table = table, //déclare un tableau
            this.repertory = repertory, //indique le répertoire
            this.time = time, //temps de transition
            this.addimage = -1, //incrémentation           
            this.autoplay(); //fonction pause       
    }
    autoplay() {
        this.addimage++,
            this.target.src = this.repertory + this.table[this.addimage] + '.jpeg';
        if (this.addimage == this.table.length - 1) {
            this.addimage = -1
        }
        let that = this;
        this.timeout = setTimeout(function () {
            that.autoplay()
        }, this.time);
    } //this représenterais la page. Utilisation d'une variable intermédiaire

    pause() {
        clearTimeout(this.timeout);
        this.time = null;
    }

    next() {
        this.addimage++;
        if (this.addimage > (this.table.length - 1)) {
            this.addimage = 0;
        }
        this.target.src = this.repertory + this.table[this.addimage] + '.jpeg';
        clearTimeout(this.timeout);
        this.time = null;
    }
    preview() {
        this.addimage--;
        if (this.addimage <= 0) {
            this.addimage = this.table.length - 1;
        }
        this.target.src = this.repertory + this.table[this.addimage] + '.jpeg';
        clearTimeout(this.timeout);
        this.time = null;
    }

    pressKeyboard(e) {
        e.preventDefault()
        this.keyboardIsActive = true
        const key = (e.keyCode ? e.keyCode : e.which)
        if (key == 80) {
            console.log('pause')
            this.pause()
        } else if (key == 39) {
            console.log('suivante')
            this.next();
        } else if (key == 37) {
            console.log('précédente')
            this.preview()
        }
    }
}

let images = ['bike1', 'bike2', 'bike3'];