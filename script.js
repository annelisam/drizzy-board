
        var audio = new Audio("./assets/6.mp3");

        $("#playSound").on("click", function(event) {
            audio.play();

            $("#drizzy").append("<img id='theImg' src='./assets/drake.png'/>")

        });