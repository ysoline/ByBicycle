class App {
  constructor() {
    this.newMap = new Map(47.21837, -1.55624, mapid);
    this.getAjax(this.newMap);
    this.getBooking();
    this.btnTimer = document.getElementById("goTimer");
  }
  getAjax(newMap) {
    ajaxGet(
      "https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=a0ce65c3665035a0a4c7ef02805b70e171c87636",
      function (response) {
        var stations = JSON.parse(response);
        for (let station of stations) {
          let newMarker = new Markers(
            station.position.lat,
            station.position.lng,
            station.name,
            station.address,
            station.bike_stands,
            station.status,
            station.banking,
            station.bonus,
            station.bike_stands,
            station.available_bike_stands,
            station.available_bikes
          );
          newMarker.addMap(newMap);
        }
      }
    );
  }
  getBooking() {
    let signature = new Canvas();
    let showForm = document.getElementById("showBooking");
    let client = new Client();

    showForm.addEventListener("click", () => {
      showForm.style.display = "none";
      document.getElementById("booking").style.display = "block";
    });

    document.getElementById('booking').addEventListener('submit', (e) => {
      e.preventDefault();

      if (client.info()) {

        this.stationName = document.getElementById('station_name').innerHTML
        this.stationAddr = document.getElementById('station_address').innerHTML
        this.stationNbBike = document.getElementById('nb_bike').innerHTML

        let timer = new Bookings(20); //Saisir un temps en minutes
        document.getElementById('current_booking').style.display = 'block'

        //Retourne les infos lié à la réservation, enlève 1 vélo sur le nombre de vélos disponible à la station selectionnée
        document.getElementById('booking_name').innerHTML = this.stationName
        document.getElementById('booking_addr').innerHTML = this.stationAddr
        this.stationNbBike = parseInt(this.stationNbBike - 1)
        document.getElementById('nb_bike').innerHTML = this.stationNbBike
      }
    });


  }
}