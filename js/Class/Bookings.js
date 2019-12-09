//Sauvegarde les infos pour la réservation
//Les infos sauvargés sont : le timer, le nom de la station où est effectué la réservation

class Bookings {
    constructor() {
        this.timerView = document.getElementById("timer")
        this.contentBooking = document.getElementById('content_booking')
        this.nb = 20
        this.min = 0
        this.remainingSec = 0
        this.isBooking = false
        this.stopTimer()

        //Detecte si il existe déjà une réservation en cours lors d'un refresh
        //Sinon réinitialise le temps à 20min
        if (sessionStorage.getItem('timer')) {

            document.getElementById('current_booking').style.display = 'block'
            document.getElementById('booking_info').innerHTML = 'Vélo réservé à la station' + ' <span id="bookingStation">' + sessionStorage.getItem('stationName') + '</span> par ' + localStorage.getItem('firstname') + ' ' + localStorage.getItem('name')
            this.sec = sessionStorage.getItem('timer')
            this.detectBooking()
            this.isBooking = true
        } else {
            this.sec = this.nb * 60
        }

    }

    //Mise en route du timer
    detectBooking() {
        clearInterval(this.interval)

        this.timerView.innerHTML = this.min + ':' + this.remainingSec
        this.interval = setInterval(this.startTimer.bind(this), 1000) //S'execute toutes les secondes
        this.isBooking = true

    }
//Déconte
    startTimer() { 

        this.min = Math.round((this.sec - 30) / 60)
        this.remainingSec = this.sec % 60

        if (this.remainingSec < 10) { //Rajoute un 0 devant les chiffres, permet l'affichage en nombre
            this.remainingSec = '0' + this.remainingSec
        }

        this.timerView.innerHTML = 'Temps restant : ' + this.min + 'min ' + this.remainingSec + 's'
        this.saveInfo()

        if (this.sec == 0) {
            this.stopTimer()
            this.timerView.innerHTML = '<span class="booking_over">Réservation expirée</span>'
            this.clearStorage()
            this.refreshPage()
        } else {
            this.sec--
        }
    }

//Stop le timer 
    stopTimer() { 
        clearInterval(this.interval)
        this.isBooking = false
    }


    saveInfo() { //Sauvegarde le temps restant
        sessionStorage.setItem('timer', this.sec)
    }

    clearStorage() { //Détruit l'objet storage une fois le temps écoulé
        sessionStorage.removeItem('timer')
    }

    refreshPage() { //Lorsqu'une réservation est finie, afin de permettre une nouvelle réservation
        console.log('Refresh de la page dans 10s')
        setTimeout(() => {
            document.location.reload(true)
        }, 10000)
    }
    removeBooking() { //Supprime le timer en cours pour un nouveau
        console.log('remove')
        clearInterval(this.interval)
        this.clearStorage()
        this.sec = this.nb * 60
    }
}