//Converts Years to Seconds for User.
	function calcY() {
		var yearsV = document.getElementById("years").value;
		var yearsL = parseFloat(yearsV) / 4
		var yearsD = parseFloat(yearsV) * 365
//Accounting for Leap Years.
		var yearsDL = yearsL + yearsD
		var yearsH = yearsDL * 24
		var yearsM = yearsH * 60
		var yearsS = yearsM * 60
		var yearR = Math.round(yearsS)
    //Displays the amount of years entered in seconds (rounded to the nearest whole number) or asks user to reenter numbers if an error occurs.
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
//Calculates Time Dilation due to Gravity using User inputted numbers.
	function calcG() {
    //Defining Variables based on User Input for calculations.
		var time2V = document.getElementById("time2").value;
		var kgV = document.getElementById("mass").value;
		var expoV = document.getElementById("exop").value;
		var distV = document.getElementById("dist").value;
		var gconsV = document.getElementById("gcons").value;
		var light2V = document.getElementById("light2").value;
		var expoVT = parseFloat(expoV);
    //Calculating Time Dilation with previous defined variables.
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
    //Checking if a number is avaialble to display or if an error/overflow occured.
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
//Converts the Seconds given by the Gravitaional Time Dilation Calculator to Years for the User.
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
    //Accounting for Leap Years.
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
