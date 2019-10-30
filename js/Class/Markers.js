
var map = document.getElementById(mapid);
class Markers {

    marker() {

        ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=a0ce65c3665035a0a4c7ef02805b70e171c87636',
            function (reponse) {
                var stations = JSON.parse(reponse);
                for (let station of stations) {
                    let marker = L.marker([
                        station.position.lat,
                        station.position.lng,
                    ]).addTo(map);

                }
            });
    }
}