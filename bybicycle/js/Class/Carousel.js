class Carousel {
    constructor() {
        this.slides = document.querySelectorAll('#slides .slide')
        this.pauseBtn = document.getElementById('pauseBtn')
        this.playBtn = document.getElementById('playBtn')
        this.nextBtn = document.getElementById('nextBtn')
        this.previewBtn = document.getElementById('prevBtn')
        this.currentSlide = 0
        let playing = true
        this.interval = setInterval(() => {
            this.gotoSlide()
        }, 5000)
        this.listener()
    }
    next() {
        this.gotoSlide(this.currentSlide + 1)
    }
    preview() {
        this.gotoSlide(this.currentSlide - 1)
    }
    gotoSlide() {
        this.slides[this.currentSlide].className = 'slide';
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.slides[this.currentSlide].className = 'slide showing';
    }

    pause() {
        this.playing = false
        clearTimeout(this.interval)

    }

    play() {
        this.playing = true
        setInterval(() => {
            this.next()
        }, 5000)
    }

    listener() {
        this.pauseBtn.addEventListener('click', () => {
            this.pause()
            this.pauseBtn.style.display = 'none'
            this.playBtn.style.display = 'block'
        })
        this.playBtn.addEventListener('click', () => {
            this.play()
            this.pauseBtn.style.display = 'block'
            this.playBtn.style.display = 'none'
        })
        document.getElementById('prevBtn').addEventListener('click', () => {
            this.pause()
            this.preview()
            this.pauseBtn.style.display = 'none'
            this.playBtn.style.display = 'block'
        })
        document.getElementById('nextBtn').addEventListener('click', () => {
            this.pause()
            this.next()
            this.pauseBtn.style.display = 'none'
            this.playBtn.style.display = 'block'
        })
    }

    pressKeyboard(e) {

        const key = (e.keyCode ? e.keyCode : e.which)

        if (key == 80) {
            console.log('pause')
            this.pause()
            this.pauseBtn.style.display = 'none'
            this.playBtn.style.display = 'block'
        } else if (key == 39) {
            console.log('suivante')
            this.pause()
            this.next();
        } else if (key == 37) {
            console.log('précédente')
            this.pause()
            this.preview()
        }
    }

}