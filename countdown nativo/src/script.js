function startTimer(duration, display){
    let timer = duration, minutes, seconds;

    setInterval(function () {
        //transformando ms em s
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;


        display.textContent = minutes + ":" + seconds;

        if (--timer < 0){
            timer = duration;
        }

    }, 1000);//a cada mil ms vai atualizar

    

}

window.onload = function () {

    let duration = 60 * 5;
         display = document.querySelector("#timer")

    startTimer(duration, display);
}