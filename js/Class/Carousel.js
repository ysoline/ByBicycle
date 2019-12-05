class Carousel {
    constructor() {
        this.slides = document.querySelectorAll('#slides .slide')
        this.pauseBtn = document.getElementById('pauseBtn')
        this.nextBtn = document.getElementById('nextBtn')
        this.previewBtn = document.getElementById('prevBtn')
        this.currentSlide = 0
        let playing = true
        this.interval = setInterval(this.next(), 5000)
        this.listener()
    }
    next() {
        this.gotoSlide(this.currentSlide + 1)
    }
    preview() {
        this.gotoSlide(this.currentSlide - 1)
    }
    gotoSlide(n) {
        this.slides[this.currentSlide].className = 'slide'
        this.currentSlide = (this.currentSlide + 1) % this.slides.length
        this.slides[this.currentSlide].className = 'slide showing'
    }

    pause() {
        this.pauseBtn.innerHTML = "<i class='fas fa-play'></i>"
        this.playing = false
        clearTimeout(this.interval)

    }

    play() {
        this.pauseBtn.innerHTML = "<i class='fas fa-pause'></i>"
        this.playing = true
        setTimeout(() => {
            this.next()
        }, 5000)
    }

    listener() {
        this.pauseBtn.addEventListener('click', () => {
            if (this.playing) {
                this.pause()
            } else {
                this.play()
            }
        })
        document.getElementById('prevBtn').addEventListener('click', () => {
            this.pause()
            this.preview()
        })
        document.getElementById('nextBtn').addEventListener('click', () => {
            this.pause()
            this.next()
        })
    }

    pressKeyboard(e) {

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