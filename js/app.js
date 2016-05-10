$(function() {
    var board = $("<div id='board'></div>");
    $('body').append(board);
    // creating turn symbol
    var turnSymbol = 'X';



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

    $('div .column').click(function() {
        if ($(this).text() == '') {
            $(this).append(turnSymbol);

            if (turnSymbol === "X") {
                turnSymbol = "O";
            } else if(turnSymbol === "O"){
                turnSymbol = "X";
            }

            winningCombo();


        }
    });

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

        var winner = "";

        if(turnSymbol == "X"){
          winner = "O";
        }else {
          winner = "X";
        }

        if (b1 + b2 + b3 === "XXX" || b1 + b2 + b3 === "OOO") {
            alert(winner + " has won");
            resetGame();
        }
        if (b1 + b4 + b7 === 'XXX' || b1 + b4 + b7 === "OOO") {
            alert(winner + " has won");
            resetGame();
        }
        if (b1 + b4 + b7 === 'XXX' || b1 + b4 + b7 === "OOO") {
            alert(winner + " has won");
        }
        if (b4 + b5 + b6 === 'XXX' || b4 + b5 + b6 === "OOO") {
            alert(winner + " has won");
        }
        if (b2 + b5 + b8 === 'XXX' || b2 + b5 + b8 === "OOO") {
            alert(winner + " has won");
        }
        if (b3 + b6 + b9 === 'XXX' || b3 + b6 + b9 === "OOO") {
            alert(winner + " has won");
        }
        if (b7 + b8 + b9 === 'XXX' || b7 + b8 + b9 === "OOO") {
            alert(winner + " has won");
        }
        if (b1 + b5 + b9 === 'XXX' || b1 + b5 + b9 === "OOO") {
            alert(winner + " has won");
        }
        if (b3 + b5 + b7 === 'XXX' || b3 + b5 + b7 === "OOO") {
            alert(winner + " has won");
        }
        if (b1 != '' && b2 != '' && b3 != '' && b4 != '' && b5 != '' && b6 != '' && b7 != '' && b8 != '' && b9 != '') {
            alert("Its a draw!!!");

        }
    }

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
      }

$('button.reset').click(resetGame);


// $('button.computer').click(function(){
//   $('div .column').click(function() {
//         if ($(this).text() == '') {
//             $(this).append(turnSymbol);
//             if (turnSymbol === "X") {
//                 turnSymbol = "O";
//             } else if(turnSymbol === "O"){
//                 turnSymbol = "X";
//             }
//             winningCombo();
//       }
//   })
//
//
//
// /// ACtivation of Computer Mode or AI Function

// $('button.computer').click(function(){
//     if (turnSymbol === b1) {
//       b2.text(turnSymbol);
//     })
//   }
//
//
//   $('div .column').click(function() {
//       if ($(this).text() == '') {
//           $(this).append(turnSymbol);
//
//           if (turnSymbol === "X") {
//               turnSymbol = "O";
//           } else if(turnSymbol === "O"){
//               turnSymbol = "X";
//           }
//
//           winningCombo();
//           // if computerMode = true -> computerTurn;``
//           if(computerMode){
//             computerTurn();
//           }
//       }
//   });
//
//   var winningCombo = function() {
//       var b1 = $('.row-0 .0').text();
//       var b2 = $('.row-0 .1').text();
//       var b3 = $('.row-0 .2').text();
//       var b4 = $('.row-1 .0').text();
//       var b5 = $('.row-1 .1').text();
//       var b6 = $('.row-1 .2').text();
//       var b7 = $('.row-2 .0').text();
//       var b8 = $('.row-2 .1').text();
//       var b9 = $('.row-2 .2').text();
//
//       var winner = "";
//
//       if(turnSymbol == "X"){
//         winner = "O";
//       }else {
//         winner = "X";
//       }
//
//       if (b1 + b2 + b3 === "XXX" || b1 + b2 + b3 === "OOO") {
//           alert(winner + " has won");
//           resetGame();
//       }
//       if (b1 + b4 + b7 === 'XXX' || b1 + b4 + b7 === "OOO") {
//           alert(winner + " has won");
//           resetGame();
//       }
//       if (b1 + b4 + b7 === 'XXX' || b1 + b4 + b7 === "OOO") {
//           alert(winner + " has won");
//       }
//       if (b4 + b5 + b6 === 'XXX' || b4 + b5 + b6 === "OOO") {
//           alert(winner + " has won");
//       }
//       if (b2 + b5 + b8 === 'XXX' || b2 + b5 + b8 === "OOO") {
//           alert(winner + " has won");
//       }
//       if (b3 + b6 + b9 === 'XXX' || b3 + b6 + b9 === "OOO") {
//           alert(winner + " has won");
//       }
//       if (b7 + b8 + b9 === 'XXX' || b7 + b8 + b9 === "OOO") {
//           alert(winner + " has won");
//       }
//       if (b1 + b5 + b9 === 'XXX' || b1 + b5 + b9 === "OOO") {
//           alert(winner + " has won");
//       }
//       if (b3 + b5 + b7 === 'XXX' || b3 + b5 + b7 === "OOO") {
//           alert(winner + " has won");
//       }
//       if (b1 != '' && b2 != '' && b3 != '' && b4 != '' && b5 != '' && b6 != '' && b7 != '' && b8 != '' && b9 != '') {
//           alert("Its a draw!!!");
//
//       }
//   }
//
//   var resetGame = function() {
//       var b1 = $('.row-0 .0').text("");
//       var b2 = $('.row-0 .1').text("");
//       var b3 = $('.row-0 .2').text("");
//       var b4 = $('.row-1 .0').text("");
//       var b5 = $('.row-1 .1').text("");
//       var b6 = $('.row-1 .2').text("");
//       var b7 = $('.row-2 .0').text("");
//       var b8 = $('.row-2 .1').text("");
//       var b9 = $('.row-2 .2').text("");
//     }
//
//   $('button.reset').click(resetGame);
//
//   }
// });
//
//
});
