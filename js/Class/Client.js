class Client {
    constructor() {

        this.name = document.getElementById('name');
        this.fn = document.getElementById('fn');
        this.info();

    }

    info() {
        document.getElementById('booking').addEventListener('submit', (e) => {

            e.preventDefault();

            console.log(this.name.value + ' ' + this.fn.value);
        })
    }
    storeInfo() {
        //Stockage d'information en cas de fermeture du navigateur
    }

}