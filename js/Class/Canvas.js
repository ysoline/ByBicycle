class Canvas {
    constructor() {
        this.c = document.getElementById('canvas')
        this.c.style.border = "1px solid black"
        this.ctx = this.c.getContext('2d')
        this.ctx.fillStyle = "black"
        this.clear = document.getElementById('clear_canvas')

        this.drawMouse()


        this.clearCanvas()
    }



    drawMouse() {
        this.c.addEventListener('mousemove', (e) => {
            if (e.buttons === 1) {
                this.position(e)
                this.draw()
            }
        })

    }
    position(e) {

        this.x = e.offsetX
        this.y = e.offsetY
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

}