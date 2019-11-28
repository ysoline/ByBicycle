class Bookings {
    constructor() {
        this.timer = 0;
    }

    detectBooking() {
        //activation quand le client "signe" la réservation
    }
    timer() {
        //décompte 20min et expiration
    }
    viewTimer() {
        //affichage sous carte du minuteur (coloration lorsqu'il reste moins de 5min ?)
    }

    //Utilisation de localStorage (sauvegarde de donées même lors de la fermeture du navigateur)
    //Faire une condition pour savoir si un objet de stockage est déjà créé ou non
    //Si une valeur est trouvé c'est que l'objet de stockage existe donc appel de la méthode pour mettre à jour
    //Si aucune valeur n'est trouvé par getItem(), aucun objet de stockage existant
    //Il faut donc créer l'objet

    //if(localStorage.getItem(clé)){
    //méthode pour mettre à jour les infos avec les dernières valeurs de l'objet de stockage

    // }else{ 
    //méthode pour créer l'objet de stockage
    //+ méthode pour mettre à jour
    // }
    updateInfo() {
        //méthode de mise à jour info
        localStorage.setItem('clé', 'valeur');
        //localStorage.setItem(clé,valeur)
        //clé : généralement un id
        //valeur : valeur dans le formulaire
    }
    setInfo() {
        //Méthode de création objet
        //updateInfo
    }
    checkStorage() { //Méthode pour vérifier si objet de stockage existent ou non
        if (localStorage.getItem('clé')) {
            this.updateInfo()
        } else {
            this.setInfo()
            this.updateInfo()
        }
    }

    clearStorage() {//Méthode permettant de supprimer tous les objets de storage
        clear()
    }
    takeBike() {
        //Indique le nombre de vélo -1 à la station où la réservation a été effectuée
        //Rappel des informations de station : Nom, adresse
    }

}