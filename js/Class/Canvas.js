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
                this.ctx.beginPath()
                this.ctx.arc(e.offsetX, e.offsetY, 1, 0, Math.PI * 2)
                this.ctx.stroke()
                this.ctx.fillStyle
                this.ctx.fill()
            }
        })
        // this.c.addEventListener('mouseup', (e) => {
        //     if (e.buttons === 0) {
        //         e.stopPropagation()
        //     }
        // })
    }


    clearCanvas(e) {
        this.clear.addEventListener('click', () => {
            
            this.ctx.clearRect(0, 0, this.c.width, this.c.height)
        })
    }

}