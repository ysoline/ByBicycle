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

        this.iconGreen = L.icon({
            iconUrl: '../img/marker/green_mark.png',
            iconSize: [30, 45],
            iconAnchor: [22, 50],
            className: 'markerActive'
        })
        this.iconRed = L.icon({
            iconUrl: '../img/marker/red_mark.png',
            iconSize: [30, 45],
            iconAnchor: [22, 50],
            className: 'markerInactive'
        });
        this.iconOrange = L.icon({
            iconUrl: '../img/marker/orange_mark.png',
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
                icon: this.iconGreen
            }).addTo(map.mapDesc);

        } else if (this.statut == "CLOSED") {
            this.Lmarker = L.marker([
                this.lat,
                this.lng,
            ], {
                icon: this.iconRed
            }).addTo(map.mapDesc);

        }  else {
            this.Lmarker = L.marker([
                this.lat,
                this.lng,
            ], {
                icon: this.iconOrange
            }).addTo(map.mapDesc);
        }
    }
}