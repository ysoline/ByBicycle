class Canvas {
    constructor() {
        this.c = document.getElementById('canvas')
        this.c.style.border = "1px solid black"
        this.ctx = this.c.getContext('2d')
        this.ctx.fillStyle = "black"
        this.clear = document.getElementById('clear_canvas')

        this.clearCanvas()
        this.mouseUp()
        this.mouseDown()

    }
    mouseDown() {
        this.c.addEventListener('mousedown', (e) => {
            this.ctx.beginPath()
            this.ctx.arc(e.offsetX, e.offsetY, 2, 0, Math.PI * 2)
            this.ctx.stroke()
            this.ctx.fillStyle
            this.ctx.fill()
        })
    }

    // mouseMove() {
    //     this.c.addEventListener('mousemove', (e) => {
    //         this.ctx.beginPath()
    //         this.ctx.arc(e.offsetX, e.offsetY, 2, 0, Math.PI * 2)
    //         this.ctx.stroke()
    //         this.ctx.fillStyle
    //         this.ctx.fill()
    //     })
    // }

    mouseUp() {
        this.c.addEventListener('mouseUp', (e) => {
            e.stopPropagation()
        })
    }

    clearCanvas() {
        this.clear.addEventListener('click', () => {

            this.c.innerHTML = '' //fonctionne pas
        })
    }

}