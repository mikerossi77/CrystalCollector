$(document).ready(function () {
    // Handler for .ready() called.

  
    var totalScore = 0;
    var green1Value = Math.floor(Math.random() * 9) + 1;
    var blue2Value = Math.floor(Math.random() * 9) + 1;
    var orange3Value = Math.floor(Math.random() * 9) + 1;
    var pink4Value = Math.floor(Math.random() * 9) + 1;
    var targetNumber = Math.floor(Math.random() * 30) + 20;
    var wins = 0;
    var losses = 0;
    $("#winLose").text("Press a Crystal...");


    var resetGame = function () {
        totalScore = 0;
        green1Value = Math.floor(Math.random() * 9) + 1;
        blue2Value = Math.floor(Math.random() * 9) + 1;
        orange3Value = Math.floor(Math.random() * 9) + 1;
        pink4Value = Math.floor(Math.random() * 9) + 1;
        targetNumber = Math.floor(Math.random() * 30) + 20;
        $("#targetNumber").text(targetNumber);
        $("#totalScore").text(totalScore);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);

    }

    var crystalPressed = function (crystalValue) {

        $("#winLose").text("Keep going...");
        totalScore = totalScore + crystalValue;
        $("#totalScore").text(totalScore);
        if (targetNumber === totalScore) {
            wins++;
            $("#winLose").text("You Win!!!  Go Again:");
            $("wins").text("Wins: " + wins)
            resetGame()
        }
        else if (totalScore > targetNumber) {
            losses++;
            $("#winLose").text("You Lose!!!  Go Again:");
            $("#losses").text("Losses:  " + losses);
            resetGame()
        }
    }

    resetGame();


    $("#green1").click(function () {
        crystalPressed(green1Value);
    });
    $("#blue2").click(function () {
        crystalPressed(blue2Value);
    });
    $("#orange3").click(function () {
        crystalPressed(orange3Value);
    });
    $("#pink4").click(function () {
        crystalPressed(pink4Value);
    });



});

