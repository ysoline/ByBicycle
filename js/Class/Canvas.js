class Canvas {
    constructor() {
        this.c = document.getElementById('canvas')
        this.c.style.border = "1px solid black"
        this.ctx = this.c.getContext('2d')
        this.ctx.fillStyle = "black"
        this.clear = document.getElementById('clear_canvas')
        this.start = false
        this.x = 0
        this.y = 0


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

    mouseMove() {
        //     this.c.addEventListener('mousemove', (e) => {
        //         this.ctx.beginPath()
        //         this.ctx.arc(e.offsetX, e.offsetY, 2, 0, Math.PI * 2)
        //         this.ctx.stroke()
        //         this.ctx.fillStyle
        //         this.ctx.fill()
        //     })

    }

    mouseUp() {
        this.c.removeEventListener('mousedown', this.mouseDown())
    }

    clearCanvas() {
        this.clear.addEventListener('click', () => {

            this.ctx.clearRect(0, 0, this.c.width, this.c.height)
        })
    }

}