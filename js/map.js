class Map {
    constructor(lat, lon, map) {
        this.lat = lat; //latitude
        this.lon = lon; //longitude
        this.map = map; //cible dans le dom
    }

    initMap() {
        this.map = L.map(this.map).setView([this.lat, this.lon], 15);

        this.layer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            minZoom: 1,
            maxZoom: 20,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoieXNvbGluZSIsImEiOiJjazF4dmY0bXgwZmZpM21sOGlzOTN4aGszIn0.YBzO02ZF423AzJFxbjJIkg'
        }).addTo(this.map);

    }
    markers() {
        ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=a0ce65c3665035a0a4c7ef02805b70e171c87636', function (reponse) {
            let stations = JSON.parse(reponse);
            stations.forEach((station) => {
                let marker = L.marker([
                    this.position = station.position,
                    this.address = station.address,
                    this.number = station.number,
                    this.bike_stands = station.bike_stands,
                    this.available_bike_stands = station.available_bike_stands,
                    this.available_bikes = station.available_bikes,
                    this.status = station.status,
                    this.bonus = station.bonus,
                    this.banking = station.banking
                ])
            }).addTo(this.map);
        })
    }
    loadMap() {
        this.initMap(),
            this.markers()
    }
}

const myMap = new Map(47.21837, -1.553621, mapid);
myMap.loadMap();

//const apikey = a0ce65c3665035a0a4c7ef02805b70e171c87636;
//const contrat = Nantes;