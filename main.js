confetti = function() {
    // spawn confetti shapes that fall from the top of the screen to the bottom
    for (var i = 0; i < 220; i++) {
        const confetti = document.createElement("div")
        confetti.className = "confetti";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.animationDuration = Math.random() * 4.5 + 5 + "s";
        confetti.style.animationDelay = Math.random() * 8 + "s";
        confetti.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        rando = Math.random();
        confetti.style.setProperty("--left", (rando*10)+"px");
								confetti.style.setProperty("--width", (randoo*100)+"%");
        document.body.appendChild(confetti);

        // delete confetti when animation ends
        confetti.addEventListener("animationend", function() {
            this.remove();
        });
        
        
    }
}

playsong = function() {
    var audio = new Audio("assets/YAY.mp3");
    audio.play();
}