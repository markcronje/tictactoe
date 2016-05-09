var rowCss = {
  height: '200px',
  display: 'flex',
  width: '1000px',
  height: '200px',
  textAlign: 'center',
  margin: ' 0 auto'
}

var colCss = {
  width:'200px',
  height: '200px',
  borderStyle: 'solid',
  borderColor: 'black',
  textAlign: 'center',
  margin: ' 0 auto'
}

var bodyStyle = {
  textAlign: 'center',
  margin: ' 0 auto'
}


var boardCenter = {
  width: '600px',
  height: '600px',
  borderStyle: 'dotted',
  borderColor: 'black',
  margin: '0 auto',
}


$('body').css(bodyStyle);
$("#board").css(boardCenter);

$('<h1>').appendTo('body').text("Welcome to Tick Tac Toe!");
$('<h2>').appendTo('body').text("Click on the square!");
$('<div>', {'id':'board'}).appendTo('body');
$('<div>', {'id':'winner'}).appendTo('body');
$('<h1>').appendTo('#winner').text("Winner");



// $(''#board').each(function(i, e) {

$('<div>', {'class':'row-1'}).appendTo('#board').css(rowCss);
$('<div>', {'class':'row-2'}).appendTo('#board').css(rowCss);
$('<div>', {'class':'row-3'}).appendTo('#board').css(rowCss);

// row one * three colums
$('<div>', {'class':'column-1'}).appendTo('.row-1').css(colCss);
$('<div>', {'class':'column-2'}).appendTo('.row-1').css(colCss);
$('<div>', {'class':'column-3'}).appendTo('.row-1').css(colCss);

// row two * three columns
$('<div>', {'class':'column-1'}).appendTo('.row-2').css(colCss);
$('<div>', {'class':'column-2'}).appendTo('.row-2').css(colCss);
$('<div>', {'class':'column-3'}).appendTo('.row-2').css(colCss);

// row three * three colums
$('<div>', {'class':'column-1'}).appendTo('.row-3').css(colCss);
$('<div>', {'class':'column-2'}).appendTo('.row-3').css(colCss);
$('<div>', {'class':'column-3'}).appendTo('.row-3').css(colCss);
