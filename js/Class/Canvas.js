class Canvas {
    constructor() {
        this.c = document.getElementById('canvas')
        this.ctx = this.c.getContext('2d')
        this.ctx.fillStyle = "black"
        this.clear = document.getElementById('clear_canvas')
        this.drawing = false
        this.loadMouse()
        this.loadTouch()
        this.clearCanvas()
        this.isEmpty = true //Défini si le canvas est vide

    }

    loadMouse() {
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
    loadTouch() {

        this.c.addEventListener('touchstart', (e) => {
            e.preventDefault()
            if (e.touches.length > 0) {
                this.drawing = true
            }
        })
        this.c.addEventListener('touchend', (e) => {
            e.preventDefault()
            if (e.touches.length > 0) {
                this.drawing = false
            }
        })
        this.c.addEventListener('touchmove', (e) => {
            e.preventDefault()
            if (e.touches.length > 0) {
                this.fingerPosition(e)
                this.draw()
                console.log(e.touches.length)
            }
        })
    }


    //Récupère la position de la souris
    mousePosition(e) {
        this.x = e.offsetX
        this.y = e.offsetY
    }


    //Récupère la position de l 'écran
    fingerPosition(e) {
        this.x = e.touches[0].clientX
        this.y = e.touches[0].clientY
    }

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