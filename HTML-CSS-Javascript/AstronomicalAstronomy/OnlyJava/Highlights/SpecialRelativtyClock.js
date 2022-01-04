  var time;
	function clocksA() {
		clearTimeout(time);
		var earthT = 0
		var lightS = 0
    //Taking value entered by the user
		var light = document.getElementById("lightP").value;
		document.getElementById("lightX").style.color = 'green';
		document.getElementById("earthX").style.color = 'green';
		document.getElementById("lightX").innerHTML = light;
		document.getElementById("relativeX").style.color = 'green';
    //Turning user value into a percentage before calculations
		var lightD = parseFloat(light) / 100;
		var earthT = 1;
    //Calculating Elasped Time on Earth using Special Relativty
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
      //If the user entered the correct value, clock will continue to run & compare Earth years passed vs years passed while traveling at whatever light speed percentage the user inputted.
			time = setTimeout(timers, 250);
      //If the user entered a value that is not in between 1 & 100, clock will not run and inform the User to try again.
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
//Manual clock reset for the User
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
