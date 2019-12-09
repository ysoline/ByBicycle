class Map {
    constructor(lat, lon, map) {
        this.lat = lat;
        this.lon = lon;

        this.mapDesc = L.map(map).setView([this.lat, this.lon], 14);

        this.layer = L.tileLayer('https://api.mapbox.com/styles/v1/ysoline/ck3rkn7hm0xmj1cp9c4inmy6m/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            accessToken: 'pk.eyJ1IjoieXNvbGluZSIsImEiOiJjazF4dmY0bXgwZmZpM21sOGlzOTN4aGszIn0.YBzO02ZF423AzJFxbjJIkg',
        }).addTo(this.mapDesc);

    }
}