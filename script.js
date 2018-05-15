
        var audio = new Audio("./assets/6.mp3");

        $("#playSound").on("click", function(event) {
            audio.play();
        });