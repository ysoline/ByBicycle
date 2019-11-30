class Canvas {
    constructor() {
        this.c = document.getElementById('canvas')
        this.c.style.border = "1px solid black"
        this.ctx = this.c.getContext('2d')
        this.ctx.fillStyle = "black"
        this.clear = document.getElementById('clear_canvas')
        this.sign()
        this.clearCanvas()
    }



    sign() {
        this.c.addEventListener('mousemove', (e) => {
            if (e.buttons === 1) {
                this.mousePosition(e)
                this.draw()
            }
        })

        this.c.addEventListener('touchmove', (e) => {
            if (e.toucheStart === 1) {
                this.fingerPosition(e)
                this.draw()
            }
        })
    }

    mousePosition(e) {

        this.x = e.offsetX
        this.y = e.offsetY
    }

    fingerPosition(e) {
        this.x = e.touches[0].offsetX
        this.y = e.touches[0].offsetY

    }


    draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2)
        this.ctx.stroke()
        this.ctx.fillStyle
        this.ctx.fill()
    }


    clearCanvas() {
        this.clear.addEventListener('click', (e) => {
            e.preventDefault()
            this.ctx.clearRect(0, 0, this.c.width, this.c.height)
        })
    }

    saveCanvas() {
        //Méthode permettant de sauvegarder le canva sous forme d'image afin de pouvoir l'exploiter ensuite.
    }

}

//position: récupération des coordonnées de la souris
//Draw : methode regroupant les paramètres pour dessiner (arc,stroke...)
//MouseDown : si souris enfoucé (detectée), appel de la méthode mouseMove + draw + position
//MouseUp + Out: return false (ou 0) pour draw, ne dessine plus quand clique relacher ou sortie de la fenétre
//ClearCanva : réinitialise le canva, pour effacement
//Tablette/Phone : toucheStart, touchMove, touchEnd(?) => même principe que mouse