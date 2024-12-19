const endDay = new Date('December 20, 2024 8:00:00');

text_day = document.querySelector("#cpt-day")


update_timer = () => {

    let curentday = new Date();

    let min = 0
    let heure = 0
    let jour = 0

    sec = endDay.getSeconds() - curentday.getSeconds()
    if (sec < 0) {
        sec += 60
        min = -1
    }
    min += endDay.getMinutes() - curentday.getMinutes()
    if (min < 0){
        min += 60
        heure = -1
    }

    heure += endDay.getHours() - curentday.getHours()
    if (heure < 0){
        heure +=24
        jour = -1
    }
    jour = jour + (endDay.getDate() - curentday.getDate())

    // console.log(jour, heure, min, sec)

    let textcpt=""

    if (jour > 0){
        textcpt += jour.toString()+"J "
    }
    if (heure > 0){
        textcpt += heure.toString()+"h "
    }
    if (min > 0){
        textcpt += min.toString()+"min "
    }
    textcpt += sec.toString()+"s"
    text_day.innerHTML = textcpt

}


function loop(){
    update_timer()
    setTimeout(loop,1000); /* rappel après 2 secondes = 2000 millisecondes */
}

loop()

