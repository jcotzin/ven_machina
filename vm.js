// var audio = $("#audio1");
// $("#drinks").click(function() {
//   audio.play();
// });

// var audio = $("#audio2");
// $("#chips").click(function() {
//   audio.play();
// });
//
// var audio = $("audio")[0];
// $("#bars").click(function() {
//   audio.play();
// });
$(document).ready(function() {
        var drinks = document.createElement("audio");
        drinks.src="images/drink.wav";
        drinks.volume=1;
        drinks.autoPlay=false;
        drinks.preLoad=true;

        $("#drinks").click(function() {
          drinks.play();
        });

        var chips = document.createElement("audio");
        chips.src="images/chips_sound.wav";
        chips.volume=1;
        chips.autoPlay=false;
        chips.preLoad=true;

        $("#chips").click(function() {
            chips.play();
        });

        var bars = document.createElement("audio");
        bars.src = "images/candy.wav";
        bars.volume=1;
        bars.autoPlay=false;
        bars.preLoad=true;

        $("#bars").click(function() {
            bars.play();
        });

    });




        // $(document).on("pagecreate", function() {
        //     var obj = document.createElement("audio");
        //     obj.src="https://kahimyang.com/resources/sound/click.mp3";
        //     obj.volume=0.10;
        //     obj.autoPlay=false;
        //     obj.preLoad=true;
        //
        //     $(".playSound").on("click tap", function () {
        //         obj.play();
        //     });
        // });
