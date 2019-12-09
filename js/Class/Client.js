class Client {
    constructor() {
        this.name = document.getElementById('name')
        this.fn = document.getElementById('fn')
        if (localStorage.getItem("name") && localStorage.getItem("firstname")) {
            this.updateInfo()
        }
    }

    //Vérification de la saisie d'informations
    info() {

        if (!!this.name.value && !!this.fn.value) {
            console.log(this.name.value + ' ' + this.fn.value);
            document.getElementById('error_form').innerHTML = ''
            this.saveInfo()
            return true
        } else {
            console.log('veuillez renseigner tous les champs')
            document.getElementById('error_form').innerHTML = 'Veuillez renseigner tous les champs'
            return false
        }
    }

    //Permet d'effacer les valeurs du formulaire
    resetValue() {
        this.name.value = ''
        this.fn.value = ''
        this.clearStorage()
    }

    //Remplis le formulaire lors que les objets storages sont connues
    updateInfo() {
        this.name.value = localStorage.getItem('name')
        this.fn.value = localStorage.getItem('firstname')

    }

    //Permet de sauvegarder les données formulaires lors de la validation du formulaire
    saveInfo() {
        localStorage.setItem('name', this.name.value)
        localStorage.setItem('firstname', this.fn.value)
    }

    //Permet de supprimer les objets storages
    clearStorage() {
        localStorage.removeItem('name')
        localStorage.removeItem('firstname')
    }

}