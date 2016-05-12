$(function() {
    var board = $("<div id='board'></div>");
    $('body').append(board);
    // creating turn symbol
    var turnSymbol = 'X';
    var Xwins = 0;
    var Owins = 0;
    var compO = "O";
    var compX = "X";
    var winner = "";
    var computerMode = false;



    // creating a loop to automate the process of creating a table of 3 rows by 3 columns using $jQuery$
    for (var rowNo = 0; rowNo <= 2; rowNo++) {
        $('<div>', {
            'class': 'row-' + rowNo
        }).appendTo('#board');
        for (var colNo = 0; colNo <= 2; colNo++) {
            $('<div>', {
                'class': 'column ' + colNo
            }).appendTo('.row-' + rowNo);
        }
    }

    // function to triggr two player mode to true
    $('#playComputer').click(function() {
        computerMode = true;
        $(this).css("border", "2px solid purple");
        $('#playTwo').css("border", "none");
        resetGame();
        console.log(winner);


    });

    $('#playTwo').click(function() {
        computerMode = false;
        $(this).css("border", "2px solid purple");
        $('#playComputer').css("border", "none");
        resetGame();
        console.log(winner);
    });


    $('div .column').click(function() {
        if ($(this).text() === '') {
            $(this).append(turnSymbol);
            if (turnSymbol === "X") {
                turnSymbol = "O";
                $('.playerTurn .turn-symbol').text(turnSymbol);

            } else if (turnSymbol === "O") {
                turnSymbol = "X";
                $('.playerTurn .turn-symbol').text(turnSymbol);
            }
            // winningCombo();
            //Now check for computer mode? If enabled - computer turn
        }
        if (computerMode === true) {
            randomPosition();
            if (turnSymbol === "X") {
                turnSymbol = "O";
                $('.playerTurn .turn-symbol').text(turnSymbol);

            } else if (turnSymbol === "O") {
                turnSymbol = "X";
                $('.playerTurn .turn-symbol').text(turnSymbol);
            }
        }
        winningCombo();

    });

    var showCup = function() {
        $(".inGame").css("display", "block");
        $("#board").css("display", "none");
        $(".inGame").addClass("swingimage");
        winner ="";
    };
    // audio files for incorporation
    var audio = new Audio('media/win.mp3');
    var audioDraw = new Audio(('media/draw.mp3'));




    var displayWinner = function() {

        if (winner == "X") {
            Xwins++;
        }
        if (winner == "O") {
            Owins++;
        }
        $('.score.X').text('Player X: ' + Xwins);
        $('.score.O').text('Player O: ' + Owins);
        $('h1').addClass("blink");
        $('h1').text(" And the winner is " + winner);

    };



    var winningCombo = function() {
        var b1 = $('.row-0 .0').text();
        var b2 = $('.row-0 .1').text();
        var b3 = $('.row-0 .2').text();
        var b4 = $('.row-1 .0').text();
        var b5 = $('.row-1 .1').text();
        var b6 = $('.row-1 .2').text();
        var b7 = $('.row-2 .0').text();
        var b8 = $('.row-2 .1').text();
        var b9 = $('.row-2 .2').text();

        if (turnSymbol == "X" && computerMode === false)  {
            winner = "O";
        } if (turnSymbol == "O" && computerMode === false)
            winner = "X";
        if (turnSymbol == "X" && computerMode === true){
            winner = "X";
        } else if (turnSymbol == "O" && computerMode === true){
            winner = "O";
        }


        if (b1 + b2 + b3 === "XXX" || b1 + b2 + b3 === "OOO") {
            displayWinner();
            audio.play();
            showCup();
        }
        if (b1 + b4 + b7 === 'XXX' || b1 + b4 + b7 === "OOO") {
            displayWinner();
            audio.play();
            showCup();
        }
        if (b1 + b4 + b7 === 'XXX' || b1 + b4 + b7 === "OOO") {
            displayWinner();
            audio.play();
            showCup();
        }
        if (b4 + b5 + b6 === 'XXX' || b4 + b5 + b6 === "OOO") {
            displayWinner();
            audio.play();
            showCup();
        }
        if (b2 + b5 + b8 === 'XXX' || b2 + b5 + b8 === "OOO") {
            displayWinner();
            audio.play();
            showCup();
        }
        if (b3 + b6 + b9 === 'XXX' || b3 + b6 + b9 === "OOO") {
            displayWinner();
            audio.play();
            showCup();
        }
        if (b7 + b8 + b9 === 'XXX' || b7 + b8 + b9 === "OOO") {
            displayWinner();
            audio.play();
            showCup();

        }
        if (b1 + b5 + b9 === 'XXX' || b1 + b5 + b9 === "OOO") {
            displayWinner();
            audio.play();
            showCup();
        }
        if (b3 + b5 + b7 === 'XXX' || b3 + b5 + b7 === "OOO") {
            displayWinner();
            audio.play();
            showCup();

        } else if (b1 !== '' && b2 !== '' && b3 !== '' && b4 !== '' && b5 !== '' && b6 !== '' && b7 !== '' && b8 !== '' && b9 !== '') {
            audioDraw.play();
            $('h1').text(" It's a draw");
        }
    };

    // computer mode logic

    var boardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var randomise = function(min, max) {
        return Math.random() * (max - min) + min;
    };

    var randomPosition = function() {
        var boardLength = boardArray.length;
        var randomIndex = Math.floor(randomise(0, boardLength));
        console.log(randomIndex);
        if ($($('div .column')[randomIndex]).text() !== "") {
            randomPosition();
        } else {
            $($('div .column')[randomIndex]).text(turnSymbol);
        }
    };



    // function used to reset game. Restore all variable back to empty string.

    var resetGame = function() {
        var b1 = $('.row-0 .0').text("");
        var b2 = $('.row-0 .1').text("");
        var b3 = $('.row-0 .2').text("");
        var b4 = $('.row-1 .0').text("");
        var b5 = $('.row-1 .1').text("");
        var b6 = $('.row-1 .2').text("");
        var b7 = $('.row-2 .0').text("");
        var b8 = $('.row-2 .1').text("");
        var b9 = $('.row-2 .2').text("");
        $("#board").css("display", "block");
        $(".inGame").css("display", "none");
        $('h1').text("TIC TAC TOE");
        $('h1').removeClass("blink");
    };




    // Game cancellation and reload buttons

    $('#reset').click(function() {
        location.reload();
    });

    $('#newGame').click(resetGame);




});
