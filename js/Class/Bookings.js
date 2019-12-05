//Sauvegarde les infos pour la réservation
//Les infos sauvargés sont : le timer, le nom de la station où est effectué la réservation

class Bookings {
    constructor() {
        this.timerView = document.getElementById("timer")
        this.contentBooking = document.getElementById('content_booking')

        this.nb = 5 //Temps pour réservation (20min)
        this.min = 0
        this.remainingSec = 0
        this.stopTimer()

        if (sessionStorage.getItem('timer')) {

            document.getElementById('current_booking').style.display = 'block'
            document.getElementById('booking_info').innerHTML = 'Vélo réservé à la station' + ' <span id="bookingStation">' + sessionStorage.getItem('stationName') + '</span> par ' + localStorage.getItem('firstname') + ' ' + localStorage.getItem('name')
            this.sec = sessionStorage.getItem('timer')
            this.detectBooking()

        } else {
            this.sec = this.nb * 60
        }
    }

    detectBooking() {
        //s'active quand le client "signe" la réservation  
        this.timerView.innerHTML = this.min + ':' + this.remainingSec
        this.interval = setInterval(this.startTimer.bind(this), 1000) //S'execute toutes les secondes

    }

    startTimer() { //Décrémentation

        this.min = Math.round((this.sec - 30) / 60)
        this.remainingSec = this.sec % 60

        if (this.remainingSec < 10) {
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

    stopTimer() { //Stop le timer 
        clearInterval(this.interval)
    }


    saveInfo() { //Sauvegarde le temps restant
        sessionStorage.setItem('timer', this.sec)
    }

    clearStorage() { //Détruit l'objet storage une fois le temps écoulé
        sessionStorage.removeItem('timer')
    }

    refreshPage() { //Lorsqu'une réservation est finie, afin de permettre une nouvelle réservation
        console.log('Refresh de la page dans 30s')
        setTimeout(() => {
            document.location.reload(true)
        }, 30000)
    }
}