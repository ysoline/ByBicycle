//Cette classe permet de gérée l'ensemble des autres classes avec la création d'objet.

class App {
  constructor() {
    this.newMap = new Map(47.21837, -1.55624, mapid); //Défini sur Nantes
    this.mySlider = new Slider('diapo', images, 'img/', 5000);
    this.getAjax(this.newMap);
    this.getBooking();
    this.listenSlider()
  }
  getAjax(newMap) { //Récupération des informations de JCDecaux
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
  listenSlider() {
    //interraction : bouton cliquer
    $('#pauseBtn').on('click', () => {
      this.mySlider.pause();
    });
    $('#nextBtn').on('click', () => {
      this.mySlider.next();
    });
    $('#prevBtn').on('click', () => {
      this.mySlider.preview();
    });
    document.addEventListener('keydown', (e) => {
      this.mySlider.pressKeyboard(e)
    })

    document.getElementById('name').addEventListener('focus', (e)=>{
      document.removeEventListener('keydown', (e) => {
        this.mySlider.pressKeyboard(e)
      })
    })
  }
  getBooking() { //Réservation 
    this.mySlider.keyboardIsActive = false

    let showForm = document.getElementById("showBooking")

    let signature = new Canvas()
    let client = new Client()
    let timer = new Bookings()

    //Apparation du formulaire de réservation lors du click sur le bouton "Faire une réservation"
    showForm.addEventListener("click", () => {

      showForm.style.display = "none";
      document.getElementById("booking").style.display = "block";

    });

    //Permet d'effacer les informations du formulaire de réservation
    document.getElementById('erase').addEventListener('click', (e) => {
      client.resetValue()
    })

    document.getElementById('sign_btn').addEventListener("click", () => {
      document.getElementById('sign_form').style.display = 'block'
    });

    //Enregistrement d'une réservation quand conditions remplies
    document.getElementById('booking').addEventListener('submit', (e) => {

      e.preventDefault();

      //Action de vérifié les informations saisies du formulaire
      client.info()

      //Si le formulaire de réservation renvoie TRUE
      if (client.info() == true) {

        //Vérifie si un dessin est créé
        if (signature.isEmpty == false) {
          document.getElementById('current_booking').style.display = 'block'

          //Sauvegarde le nom de la station lors de la réservation
          this.stationName = document.getElementById('station_name')
          sessionStorage.setItem('stationName', this.stationName.innerHTML)


          document.getElementById('booking_info').innerHTML = 'Vélo réservé à la station' + ' ' + sessionStorage.getItem('stationName') + ' par ' + localStorage.getItem('firstname') + ' ' + localStorage.getItem('name')

          document.getElementById('error_sign').innerHTML = ''
          signature.toImg() //Sauvegarde la signature sous format image 
          //Démarrage du timer
          timer.detectBooking()
        } else {
          document.getElementById('error_sign').innerHTML = 'Veuillez signer'
        }
      }
    })
  }
}