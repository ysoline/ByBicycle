class Markers {
    constructor(lat, lng, name, address, bike_stands, statut, banking, bonus, available_bike_stands, available_bikes) {
        this.lat = lat;
        this.lng = lng;
        this.name = name;
        this.address = address;
        this.bike_stands = bike_stands;
        this.statut = statut;
        this.banking = banking;
        this.bonus = bonus;
        this.available_bike_stands = available_bike_stands;
        this.available_bikes = available_bikes;
        this.Lmarker = null;

        this.iconBlue = L.icon({
            iconUrl: '../img/marker/blue_marker.png',
            iconSize: [30, 45],
            iconAnchor: [22, 50],
            className: 'markerActive'
        })
        this.iconRed = L.icon({
            iconUrl: '../img/marker/red_marker.png',
            iconSize: [30, 45],
            iconAnchor: [22, 50],
            className: 'markerInactive'
        });
    }



    addMap(map) {

        if (this.statut == "OPEN" && this.available_bikes != 0) {
            this.Lmarker = L.marker([
                this.lat,
                this.lng,
            ], {
                icon: this.iconBlue
            }).addTo(map.mapDesc);

        } else {
            this.Lmarker = L.marker([
                this.lat,
                this.lng,
            ], {
                icon: this.iconRed
            }).addTo(map.mapDesc);
        }

        //Ecoute d'évenement marker
        this.Lmarker.addEventListener('click', () => {

            document.getElementById('bloc_station').style.opacity = 1;
            document.getElementById('booking').style.display = "none"
            //Affiche nom station en enlevant les chiffres et charactère spéciaux
            document.getElementById('station_name').innerHTML = this.name.replace(new RegExp("[^(a-z A-Z)]", "g"), '');
            //Affichage addresse station
            document.getElementById('station_address').innerHTML = this.address.toUpperCase();

            //Affiche statut station, si ouverte, affiche le nombre de vélos disponibles
            if (this.statut == 'OPEN') {

                //Affiche "Station ouverte"
                document.getElementById('station_statut').innerHTML = "<span class='open'><i class='fas fa-check'></i> Station ouverte</span>";

                //Affiche le nombre de vélos disponibles
                if (this.available_bikes != 0) {
                    //Affiche formulaire de réservation
                    document.getElementById('showBooking').style.display = "block";
                    document.getElementById('station_available_bike_stands').style.display = 'block';
                    document.getElementById('station_available_bikes').style.display = 'block';

                    //Indique le nombrede vélos disponibles
                    document.getElementById('nb_bike').innerHTML = this.available_bikes;
                } else {
                    //N'affiche plus le formulaire de réservation
                    document.getElementById('showBooking').style.display = "none";
                    document.getElementById('station_available_bike_stands').style.display = 'block';
                    document.getElementById('station_available_bikes').style.display = 'block';
                    document.getElementById('station_banking').style.display = 'block';

                    //Aucun vélos disponibles
                    document.getElementById('station_available_bikes').innerHTML = "<span class='text-danger border border-danger p-2'><i class='fas fa-bicycle'></i>Pas de vélos disponibles ! </span>"
                }

                if (this.available_bike_stands != 0) {

                    //Affiche le nombre de stands de vélos disponibles
                    document.getElementById('station_available_bike_stands').innerHTML = this.available_bike_stands
                } else {
                    //Pas de place de vélos disponibles
                    document.getElementById('station_available_bike_stands').innerHTML = "<span class=' text-danger border border-danger p-2'>" + this.available_bike_stands + " Pas de places disponibles</span>";
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
            if (this.banking == true) {
                document.getElementById('station_banking').innerHTML = "<small class='text-success d-flex align-items-center'><i class='fab fa-cc-mastercard mr-1'></i>Terminal payement disponible</small>";
            } else {
                document.getElementById('station_banking').innerHTML = "<small class='text-danger d-flex align-items-center'><i class='fab fa-cc-mastercard mr-1'></i>Pas de terminal de payement</small>";
            }

        }, false)
    }
}