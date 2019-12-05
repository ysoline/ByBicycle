class Map {
    constructor(lat, lon, map) {
        this.lat = lat; //latitude
        this.lon = lon; //longitude

        this.mapDesc = L.map(map).setView([this.lat, this.lon], 14);

        this.layer = L.tileLayer('https://api.mapbox.com/styles/v1/ysoline/ck3rkn7hm0xmj1cp9c4inmy6m/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            // id: 'mapbox/streets-v11',
            accessToken: 'pk.eyJ1IjoieXNvbGluZSIsImEiOiJjazF4dmY0bXgwZmZpM21sOGlzOTN4aGszIn0.YBzO02ZF423AzJFxbjJIkg',

            // L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
            //     minZoom: 1,
            //     maxZoom: 24,
        }).addTo(this.mapDesc);

    }
}