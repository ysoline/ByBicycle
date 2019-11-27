class Client {
    constructor() {

        this.name = document.getElementById('name');
        this.fn = document.getElementById('fn');
        this.info();
        this.checkStorage()

    }

    info() {
        document.getElementById('booking').addEventListener('submit', (e) => {

            e.preventDefault();

            if (!!this.name.value && !!this.fn.value) {
                console.log(this.name.value + ' ' + this.fn.value);
                return true
            } else {
                console.log('veuillez renseigner tous les champs')
                return false
            }

        })
    }





}