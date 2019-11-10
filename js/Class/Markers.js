class Markers {
    constructor(lat, lng, name, address, bike_stands, status, banking, bonus, available_bike_stands, available_bikes) {
        this.lat = lat;
        this.lng = lng;
        this.name = name;
        this.address = address;
        this.bike_stands = bike_stands;
        this.status = status;
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

        if (this.status == "OPEN" && this.available_bikes > 0) {
            this.Lmarker = L.marker([
                this.lat,
                this.lng,
            ], { icon: this.iconBlue }).addTo(map.mapDesc);

        }
        else {
            this.Lmarker = L.marker([
                this.lat,
                this.lng,
            ], { icon: this.iconRed }).addTo(map.mapDesc);
        }
        //Ecoute d'évenement marker
        this.Lmarker.addEventListener('click', () => {

            document.getElementById('bloc_station').style.opacity = 1;
            //Affiche nom station en enlevant les chiffres et charactère spéciaux
            document.getElementById('station_name').innerHTML = this.name.replace(new RegExp("[^(a-z A-Z)]", "g"), '');
            //Affichage addresse station
            document.getElementById('station_address').innerHTML = this.address.toUpperCase();

            //Affiche status station, si ouverte, affiche le nombre de vélos disponibles
            if (this.status == 'OPEN') {
                //Affiche formulaire de réservation
                document.getElementById('booking').style.opacity = 1;

                //Affiche "Station ouverte"
                document.getElementById('station_status').innerHTML = "<span class='p-2 text-success'><i class='fas fa-check'></i> Station ouverte </span>";
                //Affiche le nombre de vélos disponibles
                if (this.available_bikes > 0) {
                    document.getElementById('station_available_bikes').innerHTML = "<span class=' text-success border border-success p-2 '><i class='fas fa-bicycle'></i> " + this.available_bikes + " Vélos disponibles</span>";
                } else {
                    document.getElementById('station_available_bikes').innerHTML = "<span class='text-danger border border-danger p-2'><i class='fas fa-bicycle'></i>Pas de vélos disponibles ! </span>"
                }

                if (this.available_bike_stands > 0) {
                    document.getElementById('station_available_bike_stands').innerHTML = "<span class=' text-success border border-success p-2'>" + this.available_bike_stands + " Places disponibles</span>";
                } else {
                    document.getElementById('station_available_bike_stands').innerHTML = "<span class=' text-danger border border-danger p-2'>" + this.available_bike_stands + " Pas de places disponibles</span>";
                }

            } else {
                document.getElementById('station_status').innerHTML = "<span class='text-light bg-danger p-2'><i class='fas fa-times'></i> Station fermée </span>";
            }
            //Affiche si le payement pas carte est disponible
            if (this.banking == true) {
                document.getElementById('station_banking').innerHTML = "<small class='text-success d-flex align-items-center'><i class='fab fa-cc-mastercard mr-1'></i>Terminal payement disponible</small>";
            } else {
                document.getElementById('station_banking').innerHTML = "<small class='text-danger d-flex align-items-center'><i class='fab fa-cc-mastercard mr-1'></i>Pas de terminal de payement</small>";
            }



        }, false)
    }
}