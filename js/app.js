// $(function() {
    var board = $("<div id='board'></div>");
    $('body').append(board);
    // creating turn symbol
    var turnSymbol = 'X';
    var Xwins = 0;
    var Owins = 0;
    var winner = "";
    var computerMode = true
    var modeSelected


    // creating a loop to automate the process of creating a table of 3 rows by 3 columns using $jQuery$
    for (var rowNo = 0; rowNo <= 2; rowNo++) {
        $('<div>', {
            'class': 'row-' + rowNo
        }).appendTo('#board')
        for (var colNo = 0; colNo <= 2; colNo++) {
            $('<div>', {
                'class': 'column ' + colNo
            }).appendTo('.row-' + rowNo)
        }
    }

// if two player button selected do whatever is below
    // formalu to start clicking on board
    // PLAYER TURN
    $('div .column').click(function() {
        if ($(this).text() == '') {
            $(this).append(turnSymbol);
            if (turnSymbol === "X") {
                turnSymbol = "O";
                $('.playerTurn .turn-symbol').text(turnSymbol);

            } else if (turnSymbol === "O") {
                turnSymbol = "X";
                $('.playerTurn .turn-symbol').text(turnSymbol);
            }
            winningCombo();
            //Now check for computer mode? If enabled - computer turn
          }
          if (computerMode === false) {
            if (turnSymbol === "X") {
                turnSymbol = "O";
                $('.playerTurn .turn-symbol').text(turnSymbol);
            } else if (turnSymbol === "O") {
                randomPosition().text("X");
          }
        }
    });

    var showCup = function() {
            $(".inGame").css("display", "block");
            $("#board").css("display", "none");
        }
        // audio files for incorporation
    var audio = new Audio('media/win.mp3');
    var audioDraw = new Audio(('media/draw.mp3'));
    // var winningImage = $('board');
    //  (this).append(image)



    var displayWinner = function() {

        if (winner == "X") {
            Xwins++;
        }
        if (winner == "O") {
            Owins++;
        }
        $('.score.X').text('Player X: ' + Xwins);
        $('.score.O').text('Player O: ' + Owins);
    }



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

        if (turnSymbol == "X") {
            winner = "O";
        } else {
            winner = "X";
        }

        if (b1 + b2 + b3 === "XXX" || b1 + b2 + b3 === "OOO") {
            displayWinner();
            audio.play();
            showCup();
            alert(winner + " has won");
        }
        if (b1 + b4 + b7 === 'XXX' || b1 + b4 + b7 === "OOO") {
            displayWinner();
            audio.play();
            showCup();
            alert(winner + " has won");
        }
        if (b1 + b4 + b7 === 'XXX' || b1 + b4 + b7 === "OOO") {
            displayWinner();
            audio.play();
            showCup();
            alert(winner + " has won");
        }
        if (b4 + b5 + b6 === 'XXX' || b4 + b5 + b6 === "OOO") {
            displayWinner();
            audio.play();
            showCup();
            alert(winner + " has won");

        }
        if (b2 + b5 + b8 === 'XXX' || b2 + b5 + b8 === "OOO") {
            displayWinner();
            audio.play();
            showCup();
            alert(winner + " has won");

        }
        if (b3 + b6 + b9 === 'XXX' || b3 + b6 + b9 === "OOO") {
            displayWinner();
            audio.play();
            showCup();
            alert(winner + " has won");
        }
        if (b7 + b8 + b9 === 'XXX' || b7 + b8 + b9 === "OOO") {
            displayWinner();
            audio.play();
            showCup();
            alert(winner + " has won");

        }
        if (b1 + b5 + b9 === 'XXX' || b1 + b5 + b9 === "OOO") {
            displayWinner();
            audio.play();
            showCup();
            alert(winner + " has won");

        }
        if (b3 + b5 + b7 === 'XXX' || b3 + b5 + b7 === "OOO") {
            displayWinner();
            audio.play();
            showCup();
            alert(winner + " has won");

        } else if (b1 != '' && b2 != '' && b3 != '' && b4 != '' && b5 != '' && b6 != '' && b7 != '' && b8 != '' && b9 != '') {
            audioDraw.play();
            alert("Its a draw!!!");
        }
    }



     var boardArray = [1,2,3,4,5,6,7,8,9];


      var randomise = function(min, max) {
        return Math.random() * (max - min) + min;
      }

      var randomPosition =  function(){
      var boardLength = boardArray.length;
      var randomIndex = randomise(0, boardLength);
      if($('div .column')[randomIndex].text("") != ""){
        randomise();
      }else {
        $('div .column')[randomIndex].text(turnSymbol);
      }
    }






// Game cancellation and reload buttons

    $('#reset').click(function() {
        location.reload();


    $('#newGame').click(resetGame);


  });


// });
