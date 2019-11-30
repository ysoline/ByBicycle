//Sauvegarde les infos pour la réservation
//Les infos sauvargés sont : le timer, le nom de la station où est effectué la réservation

class Bookings {
  constructor(nb) {
    this.timerView = document.getElementById("timer")
    this.contentBooking = document.getElementById('content_booking')
    this.min = nb
    this.sec = nb * 60
    this.min = 0
    this.remainingSec = 0
    this.stopTimer()
    this.detectBooking()
  }

  detectBooking() {
    //s'active quand le client "signe" la réservation  
    this.timerView.innerHTML = 'Expiration de la réservation dans ' + this.min + ':' + this.remainingSec
    this.interval = setInterval(this.startTimer.bind(this), 1000) //S'execute toutes les secondes
  }

  startTimer() { //Décrémentation

    this.min = Math.round((this.sec - 30) / 60)
    this.remainingSec = this.sec % 60

    if (this.remainingSec < 10) {
      this.remainingSec = '0' + this.remainingSec
    }
    this.timerView.innerHTML = 'Expiration de la réservation dans ' + this.min + ':' + this.remainingSec

    if (this.sec == 0) {
      this.stopTimer()
      this.contentBooking.innerHTML = '<span class="booking_over">Réservation expirée</span>'
    } else {
      this.sec--
    }
  }

  stopTimer() { //Stop le timer 

    clearInterval(this.interval)
    this.clearStorage()
  }

  checkStorage() {
    //Méthode pour vérifier si objet de stockage existent ou non
    if (sessionStorage.getItem("timer")) {
      this.updateInfo()
    } else {
      this.setInfo()
    }
  }
  updateInfo() {
    sessionStorage.get('timer')

  }
  setInfo() {
    sessionStorage.setItem('timer', this.nb)
    console.log(this.s + " SAUVEGARDE")
  }
  clearStorage() {
    sessionStorage.clear()
  }
}