//picture variables
	var marsI = "<img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqfLBufrKeh5Bm3NELle22FuAtVq-0BOi-Bg&usqp=CAU\" width=\"80px\" height=\"52px\" alt=\"Mars\">";
	var earthI = "<img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-zutBH2nG3LcwB05oSuchJrTcfu44JEgzw&usqp=CAU\" width=\"60px\" height=\"52px\" alt=\"Earth\">";
//welcome alert
	alert("Welcome!");
//answer reveals for quiz
	function starsA(){
	//largest
		document.getElementById("LSA").innerHTML = "UY Scuti is the largest, being 265 times the size of our Sun! ";
		document.getElementById("LSA").style.color = 'blue';
	//closest
		document.getElementById("CSA").innerHTML = "Second to the Sun the closest star is Proxima Centauri, which is 4.246 light years away! ";
		document.getElementById("CSA").style.color = 'blue';
	//smallest
		document.getElementById("SSA").innerHTML = "EBLM J0555-57Ab is the smallest, just about the size of Saturn! ";
		document.getElementById("SSA").style.color = 'blue';
	//farthest
		document.getElementById("FSA").innerHTML = "Icarus is the farthest, its light has taken over 9 billion years to reach us! ";
		document.getElementById("FSA").style.color = 'blue';
	//youngest
		document.getElementById("YSA").innerHTML = "Swift J1818.0-1607 is the youngest star discovered yet at 240 years old! ";
		document.getElementById("YSA").style.color = 'blue';
	//brightest
		document.getElementById("BSA").innerHTML = "Sirius A is the brightest star in Earth's night sky, only planets & the moon outshine it! ";
		document.getElementById("BSA").style.color = 'blue';
	//oldest
		document.getElementById("OSA").innerHTML = "Methuselah is the oldest known star, estimated at around 13.5 billion years old! ";
		document.getElementById("OSA").style.color = 'blue';
	//densest
		document.getElementById("DSA").innerHTML = "J0740+6620 is not only one of the densest stars, but the most massive neutron star ever discovered! ";
		document.getElementById("DSA").style.color = 'blue';
	}
//time refresh for martian clocks
	function update() {
		var dt = new Date();
		var he = dt.getHours()
		var hm = he + 10
		if (hm >= 24) {
			hm = hm - 24;
		}
		var me = dt.getMinutes()
		var mm = me - 11
		if (mm < 0) {
			mm = mm + 11;
		}
		var se = dt.getSeconds()
		var sm = se - 3
		if (sm < 0) {
			sm = sm + 3;
		}
		document.getElementById('hour').innerHTML = hm;
		document.getElementById('min').innerHTML = mm;
		document.getElementById('sec').innerHTML = sm;
		document.getElementById("hour").style.color = 'red';
		document.getElementById("min").style.color = 'red';
		document.getElementById("sec").style.color = 'red';
		document.getElementById("hid1").style.color = 'black';
		document.getElementById("hid2").style.color = 'black';
	}
//special relativity calculator
	function calcR() {
		var timeV = document.getElementById("time1").value;
		var velV = document.getElementById("vel").value;
		var lightV = document.getElementById("light1").value;
		var eqp1 = parseFloat(lightV) * parseFloat(lightV)
		var eqp2 = parseFloat(velV) * parseFloat(velV)
		var eqp3 = eqp2 / eqp1
		var eqp4 = 1 - eqp3
		var eqp5 = Math.sqrt(eqp4)
		var answerS = parseFloat(timeV) * eqp5
		var answerSR = Math.round(answerS)
		if(!isNaN(answerSR)) {
			document.getElementById("srans").innerHTML = "Time Dilation in seconds = "+answerSR;
			document.getElementById("srans").style.color = 'darkgreen';
			document.getElementById("srans").style.fontFamily = 'Courier New';
			document.getElementById("srans").style.fontStyle = 'italic';
		}	
		else {
			document.getElementById("srans").innerHTML = "Try double checking your numbers!"
			document.getElementById("srans").style.color = 'red';
		}
	}
//years to seconds conversion
	function calcY() {
		var yearsV = document.getElementById("years").value;
		var yearsL = parseFloat(yearsV) / 4
		var yearsD = parseFloat(yearsV) * 365
		var yearsDL = yearsL + yearsD
		var yearsH = yearsDL * 24
		var yearsM = yearsH * 60
		var yearsS = yearsM * 60
		var yearR = Math.round(yearsS)
		if(!isNaN(yearR)) {
			document.getElementById("years2s").innerHTML = yearsV+" years in seconds = "+yearR;
			document.getElementById("years2s").style.color = 'darkgreen';
			document.getElementById("years2s").style.fontFamily = 'Courier New';
			document.getElementById("years2s").style.fontStyle = 'italic';
		}	
		else {
			document.getElementById("years2s").innerHTML = "Try double checking your numbers!"
			document.getElementById("years2s").style.color = 'red';
		}
	}
//seconds to years conversion
	function calcS() {
		var secV = document.getElementById("seconds").value;
		var secMa = parseFloat(secV) / 60
		var secHa = secMa / 60
		var secDa = secHa / 24
		var secYa = secDa / 365
		var secL = secYa / 4
		var secMb = parseFloat(secV) / 60
		var secHb = secMb / 60
		var secDb = secHb / 24
		var secDL = secDb - secL
		var secYT = secDL / 365
		var secR = Math.ceil(secYT)			
		if(!isNaN(secR)) {
			document.getElementById("seconds2y").innerHTML = secV+" seconds in years = "+secR;
			document.getElementById("seconds2y").style.color = 'darkgreen';
			document.getElementById("seconds2y").style.fontFamily = 'Courier New';
			document.getElementById("seconds2y").style.fontStyle = 'italic';
		}	
		else {
			document.getElementById("seconds2y").innerHTML = "Try double checking your numbers!"
			document.getElementById("seconds2y").style.color = 'red';
		}
	}
//gravitational time dilation calculator
	function calcG() {
		var time2V = document.getElementById("time2").value;
		var kgV = document.getElementById("mass").value;
		var expoV = document.getElementById("exop").value;
		var distV = document.getElementById("dist").value;
		var gconsV = document.getElementById("gcons").value;
		var light2V = document.getElementById("light2").value;
		var expoVT = parseFloat(expoV);
		var exp = Math.pow(10,expoVT)
		var massV = parseFloat(kgV) * exp
		var gp1 = parseFloat(light2V) * parseFloat(light2V)
		var gp2 = parseFloat(distV) * gp1
		var gp3 = parseFloat(gconsV) * massV
		var gp4 = 2 * gp3
		var gp5 = gp4 / gp2
		var gp6 = 1 - gp5
		var gp7 = Math.sqrt(gp6)
		var gp8 = parseFloat(time2V) / gp7
		var gpR = Math.round(gp8)
		if(!isNaN(gpR)) {
			document.getElementById("gtdans").innerHTML = "Time Dilation in seconds = "+gpR;
			document.getElementById("gtdans").style.color = 'darkgreen';
			document.getElementById("gtdans").style.fontFamily = 'Courier New';
			document.getElementById("gtdans").style.fontStyle = 'italic';
		}	
		else {
			document.getElementById("gtdans").innerHTML = "Try double checking your numbers!"
			document.getElementById("gtdans").style.color = 'red';
		}
	}
//planet superlatives answer display
	function display(val) {
		document.getElementById("ansbox").value = ""
		document.getElementById("ansbox").value+=val
	}
	function reset() {
		document.getElementById("ansbox").value = ""
	}
//galaxy naming & information mechanism
	var galaxiesN = [];
	function galaxy(Name, Distance, Diameter, Stars) {
		this.galaxyN = Name;
		this.galaxyT = Distance;
		this.galaxyL = Diameter;
		this.galaxyS = Stars;
		galaxiesT();
	}
	var g1 = new galaxy("The Milky Way", "26,000 ly", "100,000 ly's", "100 billion");
	var g2 = new galaxy("Andromeda", "2.537m ly", "260,000 ly's", "1 trillion");
	var g3 = new galaxy("Triangulum", "2.723m ly", "60,000 ly's", "40 billion");
	var g4 = new galaxy("NGC 6822", "1.631m ly", "7,000 ly's", "10 million");
	function galaxiesT() {
		galaxiesN[0] = "The Milky Way";
		galaxiesN[1] = "Andromeda";
		galaxiesN[2] = "Triangulum";
		galaxiesN[3] = "NGC 6822";
	}
	function g1click() {
		document.getElementById("mway").innerHTML = "This is "+g1.galaxyN +". The galactic center is located about "+g1.galaxyT +" from our Solar System. With a diameter of "+g1.galaxyL +", it's estimated to have over "+g1.galaxyS +" stars!";
		document.getElementById("titles0").innerHTML = galaxiesN[0];
	}
	function g2click() {
		document.getElementById("andro").innerHTML = "This is "+g2.galaxyN +". It is located about "+g2.galaxyT +" from our own galaxy! It has a massive range with a diameter nearing "+g2.galaxyL +" & contains over "+g2.galaxyS +" stars!";
		document.getElementById("titles1").innerHTML = galaxiesN[1];
	}
	function g3click() {
		document.getElementById("trig").innerHTML = "This is "+g3.galaxyN +". The galactic center is located about "+g3.galaxyT +" from our Solar System. With a diameter of "+g3.galaxyL +", it's estimated to have over "+g3.galaxyS +" stars!";
		document.getElementById("titles2").innerHTML = galaxiesN[2];
	}
	function g4click() {
		document.getElementById("ngc").innerHTML = "This is "+g4.galaxyN +". It is located about "+g4.galaxyT +" from our own galaxy! It has a massive range with a diameter nearing "+g4.galaxyL +" & contains over "+g4.galaxyS +" stars!";
		document.getElementById("titles3").innerHTML = galaxiesN[3];
	}
//special relativity clock
	var time;
	function clocksA() {
		clearTimeout(time);
		var earthT = 0
		var lightS = 0
		var light = document.getElementById("lightP").value;
		document.getElementById("lightX").style.color = 'green';
		document.getElementById("earthX").style.color = 'green';
		document.getElementById("lightX").innerHTML = light;
		document.getElementById("relativeX").style.color = 'green';
		var lightD = parseFloat(light) / 100;
		var earthT = 1;
		function timers() {
			var lightS = earthT * 31557600;
			var lqp1 = 299792458 * 299792458;
			var lqp2 = lightD * 299792458;
			var lqp3 = lqp2 * lqp2;
			var lqp4 = lqp3 / lqp1;
			var lqp5 = 1 - lqp4;
			var lqp6 = Math.sqrt(lqp5);
			var lqp7 = lightS * lqp6;
			var lqpM = lqp7 / 60;
			var lqpH = lqpM / 60;
			var lqpD = lqpH / 24;
			var lqpY = lqpD / 365;
			var relLX = Math.floor(lqpY)
			relativeX.innerHTML = relLX;
			earthT = earthT + 1;
			earthX.innerHTML = earthT;
			time = setTimeout(timers, 250);
			if (isNaN(light)) {
				clearTimeout(time);
				document.getElementById("lightX").innerHTML = "Reenter Light %";
				document.getElementById("lightX").style.color = 'red';
				document.getElementById("earthX").innerHTML = "Reenter Light %";
				document.getElementById("earthX").style.color = 'red';
				document.getElementById("relativeX").innerHTML = "Reenter Light %";
				document.getElementById("relativeX").style.color = 'red';
			}
			else if (light > 100 || light < 0) {
				clearTimeout(time);
				document.getElementById("lightX").innerHTML = "Reenter Light %";
				document.getElementById("lightX").style.color = 'red';
				document.getElementById("earthX").innerHTML = "Reenter Light %";
				document.getElementById("earthX").style.color = 'red';
				document.getElementById("relativeX").innerHTML = "Reenter Light %";
				document.getElementById("relativeX").style.color = 'red';						}
		}
		timers();
	}
	function clocksS() {
		clearTimeout(time);
		var earthT = 0
		var lightS = 0
		document.getElementById("lightX").innerHTML = "Reenter Light %";
		document.getElementById("lightX").style.color = 'red';
		document.getElementById("earthX").innerHTML = "Reenter Light %";
		document.getElementById("earthX").style.color = 'red';
		document.getElementById("relativeX").innerHTML = "Reenter Light %";
		document.getElementById("relativeX").style.color = 'red';
	}
//slideshow dots
	var slideI2 = 1;
	slidesS2(slideI2);
	function slidesP(n) {
		slidesS2(slideI2 += n);
	}
	function slideC(n) {
		slidesS2(slideI2 = n);
	}
	function slidesS2(n) {
		var num;
		var slidesV = document.getElementsByClassName("slides");
		var dots = document.getElementsByClassName("dot");
		if (n > slidesV.length) {
			slideI2 = 1
		}
		if (n < 1) {
			slideI2 = slidesV.length
		}
		for (num = 0; num < slidesV.length; num++) {
			slidesV[num].style.display = "none";
		}
		for (num = 0; num < dots.length; num++) {
			dots[num].className = dots[num].className.replace(" active", "");
		}
		slidesV[slideI2-1].style.display = 'block';
		dots[slideI2-1].className += " active";
	}
//TicTacToe game
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
	else {
		if (turns == 1) {
			document.getElementById("winner").innerHTML = "Mars is up!";
		}
		else {
			document.getElementById("winner").innerHTML = "Earth is up!";
		}
	}
}
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
