class Map {
    constructor(lat, lon, map) {
        this.lat = lat; //latitude
        this.lon = lon; //longitude
        this.map = map; //cible dans le dom

        this.map = L.map(this.map).setView([this.lat, this.lon], 15);

        this.layer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            minZoom: 1,
            maxZoom: 20,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoieXNvbGluZSIsImEiOiJjazF4dmY0bXgwZmZpM21sOGlzOTN4aGszIn0.YBzO02ZF423AzJFxbjJIkg'
        }).addTo(this.map);
        console.log(this.map);
    }
}
class Markers {
    constructor(map) {
        this.map = map,

            $.ajax({
                url: 'https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=a0ce65c3665035a0a4c7ef02805b70e171c87636',
                type: 'GET',
                success: function (reponse) {
                    console.log(this.map);
                    // reponse.forEach((station) => {
                    for (let station of reponse) {
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
                        ]).addTo(this.map);

                    }
                }
            })
    }

}

//const apikey = a0ce65c3665035a0a4c7ef02805b70e171c87636;
//const contrat = Nantes;