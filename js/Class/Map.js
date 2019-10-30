
class Map {
    constructor(lat, lon, map) {
        this.lat = lat; //latitude
        this.lon = lon; //longitude
        this.map = map;

        this.map = L.map(map).setView([this.lat, this.lon], 15);

        this.layer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            minZoom: 1,
            maxZoom: 20,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoieXNvbGluZSIsImEiOiJjazF4dmY0bXgwZmZpM21sOGlzOTN4aGszIn0.YBzO02ZF423AzJFxbjJIkg'
        }).addTo(this.map);
    }

    // markers() {
    //     var maptest = this.map;
    //     ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=a0ce65c3665035a0a4c7ef02805b70e171c87636',
    //         function (reponse) {
    //             var stations = JSON.parse(reponse);
    //             for (let station of stations) {
    //                 let marker = L.marker([
    //                     station.position.lat,
    //                     station.position.lng,
    //                 ]).addTo(maptest);

    //             }
    //         });
    // }

}
