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

    //Permet de détecter les actions de la souris
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
                this.draw(this.x, this.y)
            }
        })
    }

    //Permet de détecter les actions lié au tactil
    loadTouch() {

        this.c.addEventListener('touchstart', (e) => {
            e.preventDefault()
            if (e.touches.length > 0) {
                this.drawing = true
            }
        })

        this.c.addEventListener('touchmove', (e) => {
            e.preventDefault()

            let touchPos = this.fingerPosition(e)
            this.ctx.beginPath()
            this.ctx.arc(touchPos.x, touchPos.y, 3, 0, Math.PI * 2)
            this.ctx.closePath()
            this.ctx.stroke()
            this.ctx.fillStyle
            this.ctx.fill()
            this.isEmpty = false
        })
    }


    //Récupère la position de la souris
    mousePosition(e) {
        this.x = e.offsetX
        this.y = e.offsetY
    }


    //Récupère la position du doigt sur l'écran
    fingerPosition(e) {
        let rect = this.c.getBoundingClientRect(e)

        return {
            x: (e.touches['0'].clientX - rect.left) * (this.c.width / rect.width),
            y: (e.touches['0'].clientY - rect.top) * (this.c.height / rect.height)
        }
    }

    //Initialise le dessin
    draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, 3, 0, Math.PI * 2)
        this.ctx.closePath()
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