class Map {
    constructor(lat, lon, map) {
        this.lat = lat; //latitude
        this.lon = lon; //longitude

        this.mapDesc = L.map(map).setView([this.lat, this.lon], 14);

        this.layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
            minZoom: 1,
            maxZoom: 24,
        }).addTo(this.mapDesc);

    }
}