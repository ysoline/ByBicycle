class Canvas {
    constructor() {
        this.c = document.getElementById('canvas')
        this.ctx = this.c.getContext('2d')
        this.ctx.fillStyle = "black"
        this.clear = document.getElementById('clear_canvas')
        this.drawing = false
        this.load()
        this.clearCanvas()
        this.isEmpty = true //Défini si le canvas est vide

    }

    load() {
        this.c.addEventListener('mousedown', () => {
            this.drawing = true
        })
        this.c.addEventListener('mouseup', () => {
            this.drawing = false
        })
        this.c.addEventListener('mousemove', (e) => {
            if (this.drawing) {
                this.mousePosition(e)
                this.draw()
            }
        })
    }

    // fingerSign() {
    //     this.c.addEventListener('touchmove', (e) => {
    //         if (e.toucheStart === 1) {
    //             this.fingerPosition(e)
    //             this.draw()
    //             this.isEmpty = false
    //         }
    //     })

    // }

    // //Récupère la position de la souris
    mousePosition(e) {
        this.x = e.offsetX
        this.y = e.offsetY
    }


    //Récupère la position de l'écran
    // fingerPosition(e) {
    //     this.x = e.touches[0].offsetX
    //     this.y = e.touches[0].offsetY

    // }

    //Initialise le dessin
    draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, 3, 0, Math.PI * 2)
        this.ctx.stroke()
        this.ctx.fillStyle
        this.ctx.fill()
        this.isEmpty = false
    }

    //Efface le dessin du canva
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.c.width, this.c.height)
        this.isEmpty = true
    }

    //Sauvagarde le canvas en image
    toImg() {
        let dataUrl = this.c.toDataURL('sign/png', 0.5);
        console.log(dataUrl)
    }

}