confetti = function() {
    // spawn confetti shapes that fall from the top of the screen to the bottom
    for (var i = 0; i < 200; i++) {
        const confetti = document.createElement("div")
        confetti.className = "confetti";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.animationDuration = Math.random() * 5 + 5 + "s";
        confetti.style.animationDelay = Math.random() * 5 + "s";
        confetti.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        slide = Math.random() * 100;
        confetti.style.setProperty("--left", slide+"%");
        document.body.appendChild(confetti);

        // delete confetti when animation ends
        confetti.addEventListener("animationend", function() {
            this.remove();
        });
        
        
    }
}

playsong = function() {
    var audio = new Audio("YAY.mp3");
    audio.play();
}