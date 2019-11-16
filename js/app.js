
class App {
    constructor() {
        this.newMap = new Map(47.21837, -1.55624, mapid);
        this.getAjax(this.newMap);
        this.getClient();
    }
    getAjax(newMap) {
        ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=a0ce65c3665035a0a4c7ef02805b70e171c87636',
            function (reponse) {
                var stations = JSON.parse(reponse);
                for (let station of stations) {
                    let newMarker = new Markers(station.position.lat, station.position.lng, station.name, station.address, station.bike_stands, station.status, station.banking, station.bonus, station.bike_stands, station.available_bike_stands, station.available_bikes);
                    newMarker.addMap(newMap);
                }
            }
        );
    }
    getClient() {
        let client = new Client();
    }


}
