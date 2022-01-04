//Picture Variables for Boxes.
	var marsI = "<img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqfLBufrKeh5Bm3NELle22FuAtVq-0BOi-Bg&usqp=CAU\" width=\"80px\" height=\"52px\" alt=\"Mars\">";
	var earthI = "<img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-zutBH2nG3LcwB05oSuchJrTcfu44JEgzw&usqp=CAU\" width=\"60px\" height=\"52px\" alt=\"Earth\">";
//Check for Win after User Click.
	function clickS() {
	var box1V = document.getElementById("box1").value;
	var box2V = document.getElementById("box2").value;
	var box3V = document.getElementById("box3").value;
	var box4V = document.getElementById("box4").value;
	var box5V = document.getElementById("box5").value;
	var box6V = document.getElementById("box6").value;
	var box7V = document.getElementById("box7").value;
	var box8V = document.getElementById("box8").value;
	var box9V = document.getElementById("box9").value;
	if ((box1V == 'x' || box1V == 'X') && (box2V == 'x' || box2V == 'X') && (box3V == 'x' || box3V == 'X')) {
        	document.getElementById("winner").innerHTML = "Mars won!";
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
    	}
	else if ((box4V == 'x' || box4V == 'X') && (box5V == 'x' || box5V == 'X') && (box6V == 'x' || box6V == 'X')) {
		document.getElementById("winner").innerHTML = "Mars won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box7V == 'x' || box7V == 'X') && (box8V == 'x' || box8V == 'X') && (box9V == 'x' || box9V == 'X')) {
		document.getElementById("winner").innerHTML = "Mars won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
	}
	else if ((box1V == 'x' || box1V == 'X') && (box4V == 'x' || box4V == 'X') && (box7V == 'x' || box7V == 'X')) {
		document.getElementById("winner").innerHTML = "Mars won!";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box2V == 'x' || box2V == 'X') && (box5V == 'x' || box5V == 'X') && (box8V == 'x' || box8V == 'X')) {
		document.getElementById("winner").innerHTML = "Mars won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box3V == 'x' || box3V == 'X') && (box6V == 'x' || box6V == 'X') && (box9V == 'x' || box9V == 'X')) {
		document.getElementById("winner").innerHTML = "Mars won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
	}
	else if ((box1V == 'x' || box1V == 'X') && (box5V == 'x' || box5V == 'X') && (box9V == 'x' || box9V == 'X')) {
		document.getElementById("winner").innerHTML = "Mars won!";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
	}
	else if ((box3V == 'x' || box3V == 'X') && (box5V == 'x' || box5V == 'X') && (box7V == 'x' || box7V == 'X')) {
		document.getElementById("winner").innerHTML = "Mars won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box1V == 'o' || box1V == 'O') && (box2V == 'o' || box2V == 'O') && (box3V == 'o' || box3V == 'O')) {
		document.getElementById("winner").innerHTML = "Earth won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box4V == 'o' || box4V == 'O') && (box5V == 'o' || box5V == 'O') && (box6V == 'o' || box6V == 'O')) {
		document.getElementById("winner").innerHTML = "Earth won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box7V == 'o' || box7V == 'O') && (box8V == 'o' || box8V == 'O') && (box9V == 'o' || box9V == 'O')) {
		document.getElementById("winner").innerHTML = "Earth won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
	}
	else if ((box1V == 'o' || box1V == 'O') && (box4V == 'o' || box4V == 'O') && (box7V == 'o' || box7V == 'O')) {
		document.getElementById("winner").innerHTML = "Earth won!";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box2V == 'o' || box2V == 'O') && (box5V == 'o' || box5V == 'O') && (box8V == 'o' || box8V == 'O')) {
		document.getElementById("winner").innerHTML = "Earth won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box3V == 'o' || box3V == 'O') && (box6V == 'o' || box6V == 'O') && (box9V == 'o' || box9V == 'O')) {
		document.getElementById("winner").innerHTML = "Earth won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
	}
	else if ((box1V == 'o' || box1V == 'O') && (box5V == 'o' || box5V == 'O') && (box9V == 'o' || box9V == 'O')) {
		document.getElementById("winner").innerHTML = "Earth won!";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
	}
	else if ((box3V == 'o' || box3V == 'O') && (box5V == 'o' || box5V == 'O') && (box7V == 'o' || box7V == 'O')) {
		document.getElementById("winner").innerHTML = "Earth won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box1V == 'X' || box1V == 'O') && (box2V == 'X' || box2V == 'O') && (box3V == 'X' || box3V == 'O') && (box4V == 'X' || box4V == 'O') && (box5V == 'X' || box5V == 'O') && (box6V == 'X' || box6V == 'O') && (box7V == 'X' || box7V == 'O') && (box8V == 'X' || box8V == 'O') && (box9V == 'X' || box9V == 'O')) {
		document.getElementById("winner").innerHTML = "Stalemate";
	}
//If No Winner on User Click check for Turn.
	else {
		if (turns == 1) {
			document.getElementById("winner").innerHTML = "Mars is up!";
		}
		else {
			document.getElementById("winner").innerHTML = "Earth is up!";
		}
	}
}
//Reset the Game.
function resets() {
	location.reload()
	document.getElementById("box1").value = "";
	document.getElementById("box2").value = "";
	document.getElementById("box3").value = "";
	document.getElementById("box4").value = "";
	document.getElementById("box5").value = "";
	document.getElementById("box6").value = "";
	document.getElementById("box7").value = "";
	document.getElementById("box8").value = "";
	document.getElementById("box9").value = "";
	document.getElementById("img1").innerHTML = "";
	document.getElementById("img2").innerHTML = "";
	document.getElementById("img3").innerHTML = "";
	document.getElementById("img4").innerHTML = "";
	document.getElementById("img5").innerHTML = "";
	document.getElementById("img6").innerHTML = "";
	document.getElementById("img7").innerHTML = "";
	document.getElementById("img8").innerHTML = "";
	document.getElementById("img9").innerHTML = "";
	document.getElementById("winner").innerHTML = "";
	document.getElementById("box1").disabled = false;
	document.getElementById("box2").disabled = false;
	document.getElementById("box3").disabled = false;
	document.getElementById("box4").disabled = false;
	document.getElementById("box5").disabled = false;
	document.getElementById("box6").disabled = false;
	document.getElementById("box7").disabled = false;
	document.getElementById("box8").disabled = false;
	document.getElementById("box9").disabled = false;
}
//Placing Picture in correct box after User Click, then switching turns.
var turns = 1;
function turns1() {
	if (turns == 1) {
		document.getElementById("box1").value = "X";
		document.getElementById("box1").disabled = true;
		document.getElementById("img1").innerHTML = marsI;		
		turns = 0;
	}
	else {
		document.getElementById("box1").value = "O";
		document.getElementById("box1").disabled = true;
		document.getElementById("img1").innerHTML = earthI;
		turns = 1;
	}
}
function turns2() {
	if (turns == 1) {
		document.getElementById("box2").value = "X";
		document.getElementById("box2").disabled = true;
		document.getElementById("img2").innerHTML = marsI;
		turns = 0;
	}
	else {
		document.getElementById("box2").value = "O";
		document.getElementById("box2").disabled = true;
		document.getElementById("img2").innerHTML = earthI;
		turns = 1;
	}
}
function turns3() {
	if (turns == 1) {
		document.getElementById("box3").value = "X";
		document.getElementById("box3").disabled = true;
		document.getElementById("img3").innerHTML = marsI;
		turns = 0;
	}
	else {
		document.getElementById("box3").value = "O";
		document.getElementById("box3").disabled = true;
		document.getElementById("img3").innerHTML = earthI;
		turns = 1;
	}
}
function turns4() {
	if (turns == 1) {
		document.getElementById("box4").value = "X";
		document.getElementById("box4").disabled = true;
		document.getElementById("img4").innerHTML = marsI;
		turns = 0;
	}
	else {
		document.getElementById("box4").value = "O";
		document.getElementById("box4").disabled = true;
		document.getElementById("img4").innerHTML = earthI;
		turns = 1;
	}
}
function turns5() {
	if (turns == 1) {
		document.getElementById("box5").value = "X";
		document.getElementById("box5").disabled = true;
		document.getElementById("img5").innerHTML = marsI;
		turns = 0;
	}
	else {
		document.getElementById("box5").value = "O";
		document.getElementById("box5").disabled = true;
		document.getElementById("img5").innerHTML = earthI;
		turns = 1;
	}
}
function turns6() {
	if (turns == 1) {
		document.getElementById("box6").value = "X";
		document.getElementById("box6").disabled = true;
		document.getElementById("img6").innerHTML = marsI;
		turns = 0;
	}
	else {
		document.getElementById("box6").value = "O";
		document.getElementById("box6").disabled = true;
		document.getElementById("img6").innerHTML = earthI;
		turns = 1;
	}
}
function turns7() {
	if (turns == 1) {
		document.getElementById("box7").value = "X";
		document.getElementById("box7").disabled = true;
		document.getElementById("img7").innerHTML = marsI;
		turns = 0;
	}
	else {
		document.getElementById("box7").value = "O";
		document.getElementById("box7").disabled = true;
		document.getElementById("img7").innerHTML = earthI;
		turns = 1;
	}
}
function turns8() {
	if (turns == 1) {
		document.getElementById("box8").value = "X";
		document.getElementById("box8").disabled = true;
		document.getElementById("img8").innerHTML = marsI;
		turns = 0;
	}
	else {
		document.getElementById("box8").value = "O";
		document.getElementById("box8").disabled = true;
		document.getElementById("img8").innerHTML = earthI;
		turns = 1;
	}
}
function turns9() {
	if (turns == 1) {
		document.getElementById("box9").value = "X";
		document.getElementById("box9").disabled = true;
		document.getElementById("img9").innerHTML = marsI;
		turns = 0;
	}
	else {
		document.getElementById("box9").value = "O";
		document.getElementById("box9").disabled = true;
		document.getElementById("img9").innerHTML = earthI;
		turns = 1;
	}
}
