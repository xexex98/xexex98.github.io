document.addEventListener("keydown", function (event) {
    let srcA = "white_keys/" + event.key.toUpperCase() + ".mp3"
    let audio = new Audio(srcA);
    audio.play();
});