class Map {
    constructor(lat, lon, map) {
        this.lat = lat; //latitude
        this.lon = lon; //longitude

        this.mapDesc = L.map(map).setView([this.lat, this.lon], 14);

        this.layer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            minZoom: 1,
            maxZoom: 20,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoieXNvbGluZSIsImEiOiJjazF4dmY0bXgwZmZpM21sOGlzOTN4aGszIn0.YBzO02ZF423AzJFxbjJIkg'
        }).addTo(this.mapDesc);

    }
}
