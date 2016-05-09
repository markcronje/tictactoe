var board = $("<div id='board'></div>");
$('body').append(board);

// creating a loop to automate the process of creating a table of 3 rows by 3 columns using $jQuery$
for (var rowNo = 0; rowNo <= 2; rowNo++) {
  $('<div>', {'class':'row-' + rowNo}).appendTo('#board')
  for (var colNo = 0; colNo <= 2; colNo++) {
    $('<div>', {'class':'column ' + colNo}).appendTo('.row-'+rowNo)
  }
}


// creating mousehover functions using Jquery
$('#board').dblclick(function() {
  $(this).appendTo('#X')
});
