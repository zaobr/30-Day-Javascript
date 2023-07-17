let keys = document.querySelectorAll(".key")
let audios = document.querySelectorAll("audio")


document.body.addEventListener("keydown", playSound)

function playSound(event){
    keys.forEach(key => {
        if(event.keyCode == key.getAttribute("data-key")){
            audios.forEach(audio => {
                if(key.getAttribute("data-key") == audio.getAttribute("data-key")){
                    key.classList.add("playing");
                    audio.currentTime = 0;
                    audio.play();
                }
            })
            setTimeout(() => {
                key.classList.remove("playing");
            }, 100)
        }
    })
}