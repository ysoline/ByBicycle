//Cette classe permet de gérée l'ensemble des autres classes avec la création d'objet.

class App {
  constructor() {
    this.newMap = new Map(47.21837, -1.55624, mapid); //Défini sur Nantes
    this.signature = new Canvas()
    this.carousel = new Carousel()
    this.client = new Client()
    this.timer = new Bookings()
    this.getAjax(this.newMap);
    this.allListener();
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

          //Ecoute d'évenement marker
          newMarker.Lmarker.addEventListener('click', () => {

            document.getElementById('bloc_station').style.opacity = 1;
            document.getElementById('booking').style.display = "none"
            //Affiche nom station en enlevant les chiffres et charactère spéciaux
            document.getElementById('station_name').innerHTML = newMarker.name.replace(new RegExp("[^(a-z A-Z)]", "g"), '');
            //Affichage addresse station
            document.getElementById('station_address').innerHTML = newMarker.address.toUpperCase();

            //Affiche statut station, si ouverte, affiche le nombre de vélos disponibles
            if (newMarker.statut == 'OPEN') {

              //Affiche "Station ouverte"
              document.getElementById('station_statut').innerHTML = "<span class='open'><i class='fas fa-check'></i> Station ouverte</span>";

              //Affiche le nombre de vélos disponibles
              if (newMarker.available_bikes != 0) {
                //Affiche formulaire de réservation
                document.getElementById('showBooking').style.display = "block";
                document.getElementById('station_available_bike_stands').style.display = 'block';
                document.getElementById('station_available_bikes').style.display = 'block';

                //Indique le nombrede vélos disponibles
                document.getElementById('station_available_bikes').innerHTML = '<span class="available_bikes">Vélos disponibles : <span id="nb_bike">' + newMarker.available_bikes + '</span></span>';
              } else {
                //N'affiche plus le formulaire de réservation
                document.getElementById('showBooking').style.display = "none";
                document.getElementById('station_available_bike_stands').style.display = 'block';
                document.getElementById('station_available_bikes').style.display = 'block';
                document.getElementById('station_banking').style.display = 'block';

                //Aucun vélos disponibles
                document.getElementById('station_available_bikes').innerHTML = "<span class='no_bike'>Pas de vélos disponibles ! </span>"
              }

              if (newMarker.available_bike_stands != 0) {

                //Affiche le nombre de stands de vélos disponibles
                document.getElementById('station_available_bike_stands').innerHTML = '<span class="d-flex available_bike_stand"> Places disponibles : ' + newMarker.available_bike_stands + '</span>'
              } else {
                //Pas de place de vélos disponibles
                document.getElementById('station_available_bike_stands').innerHTML = "<span class='no_available_stand'>" + newMarker.available_bike_stands + " Pas de places disponibles</span>";
              }
            } else {
              //Station fermée
              // document.getElementById('station_statut').innerHTML = "<span class='text-light bg-danger p-2'><i class='fas fa-times'></i> Fermée </span>";
              document.getElementById('station_statut').innerHTML = "<span class='closed'><i class='fas fa-times'></i> Fermée </span>";
              document.getElementById('showBooking').style.display = "none";
              document.getElementById('station_banking').style.display = "none";
              document.getElementById('station_available_bike_stands').style.display = "none";
              document.getElementById('station_available_bikes').style.display = "none";;
            }

            //Affiche si un terminal de payement est disponible ou non
            if (newMarker.banking == true) {
              document.getElementById('station_banking').innerHTML = "<small class='text-success d-flex align-items-center'><i class='fab fa-cc-mastercard mr-1'></i>Terminal payement disponible</small>";
            } else {
              document.getElementById('station_banking').innerHTML = "<small class='text-danger d-flex align-items-center'><i class='fab fa-cc-mastercard mr-1'></i>Pas de terminal de payement</small>";
            }

          }, false)
        }
      })
  }

  allListener() { //Réservation 
    //Création d'une variable pour controler du slider au clavier
    //Active le controle clavier sur le slider
    let slider = (e) => {
      this.carousel.pressKeyboard(e)
    }
    document.addEventListener('keydown', slider, true)

    //Désactive le controle clavier du slider lorsqu'on ce situe dans les inputs du formulaire
    //Utilisation d'une boucle pour récupérer tous les inputs avec la classe demandée
    //Gestion des écouteurs du clavier

    let enterForm = document.getElementsByClassName('enterForm')

    for (let i = 0; i < enterForm.length; i++) {
      enterForm[i].addEventListener('focusin', () => {
        document.removeEventListener('keydown', slider, true)
      }, true)
      enterForm[i].addEventListener('focusout', () => {
        document.addEventListener('keydown', slider, true)
      }, true)
    }


    let showForm = document.getElementById("showBooking")



    document.getElementById('clear_canvas').addEventListener('click', (e) => {
      e.preventDefault()
      this.signature.clearCanvas()
    })

    //Apparation du formulaire de réservation lors du click sur le bouton "Faire une réservation"
    showForm.addEventListener("click", () => {

      showForm.style.display = "none";
      document.getElementById("booking").style.display = "block";

    });

    //Permet d'effacer les informations du formulaire de réservation
    document.getElementById('erase').addEventListener('click', (e) => {
      this.client.resetValue()
    })

    document.getElementById('sign_btn').addEventListener("click", () => {
      this.name = document.getElementById('name').value
      this.fn = document.getElementById('fn').value
      if (!!this.name && !!this.fn) {
        document.getElementById('sign_form').style.display = 'block'
        document.getElementById('input_booking').style.display = 'none'
      } else {
        document.getElementById('error_form').innerHTML = 'Veuillez remplir tous les champs'
      }
    });

    //Enregistrement d'une réservation quand conditions remplies
    document.getElementById('booking').addEventListener('submit', (e) => {

      e.preventDefault();

      //Action de vérifié les informations saisies du formulaire
      this.client.info()

      //Si le formulaire de réservation renvoie TRUE
      if (this.client.info() == true) {

        //Vérifie si un dessin est créé
        if (this.signature.isEmpty == false) {
          document.getElementById('current_booking').style.display = 'block'

          //Sauvegarde le nom de la station lors de la réservation
          this.stationName = document.getElementById('station_name')
          sessionStorage.setItem('stationName', this.stationName.innerHTML)

          document.getElementById('booking_info').innerHTML = 'Vélo réservé à la station' + ' <span id="bookingStation">' + sessionStorage.getItem('stationName') + '</span> par ' + localStorage.getItem('firstname') + ' ' + localStorage.getItem('name')

          document.getElementById('error_sign').innerHTML = ''

          //Sauvegarde la signature sous format image 
          this.signature.toImg()

          //Démarrage du timer
          this.timer.detectBooking()
        } else {
          document.getElementById('error_sign').innerHTML = 'Veuillez signer'
        }
      }

      if (this.timer.detectBooking()) {
        alert('Réservation déjà en cour')
      }
    })
  }
}