class Client {
    constructor() {
        this.name = document.getElementById('name')
        this.fn = document.getElementById('fn')
        this.updateInfo()
    }

    info() {

        if (!!this.name.value && !!this.fn.value) {
            console.log(this.name.value + ' ' + this.fn.value);
            this.checkStorage()
            return true
        } else {
            console.log('veuillez renseigner tous les champs')
            return false
        }
    }

    resetValue() {
        this.name.innerHtml = ' '
        this.fn.innerHTML = ' '
        this.clearStorage()
    }



    checkStorage() {
        //Méthode pour vérifier si objet de stockage existent ou non
        if (localStorage.getItem("name") && localStorage.getItem("firstname")) {
            this.updateInfo()
        } else {
            this.setInfo()
        }
    }
    updateInfo() {
        this.name = localStorage.getItem('name')
        this.fn = localStorage.getItem('firstname')

    }
    saveInfo() {
        localStorage.setItem('name', this.name)
        localStorage.setItem('firstname', this.fn)
    }
    clearStorage() {
        localStorage.clear()
    }

}