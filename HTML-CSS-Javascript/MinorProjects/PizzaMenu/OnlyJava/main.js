	var runner;
	var t1;
	function receipt() {
		var t1 = "<h3> You Ordered:</h3>";
		var runner = 0;
		var sizer = 0;
		var sar = document.getElementsByClassName("size");
		for (var i4 = 0; i4 < sar.length; i4++) {
			if (sar[i4].checked) {
				var sel = sar[i4].value;
				t1 = t1+sel+"<br>";
			}
		}
		if (sel === "Personal Pizza") {
			sizer = 6;
		}
		else if (sel === "Medium Pizza") {
			sizer = 8;
		}
		else if (sel === "Four Corner Pizza") {
			sizer = 12;
		}
		else if (sel === "Large Pizza") {
			sizer = 16;
		}
		else if (sel === "Extra Large Pizza") {
			sizer = 18;
		}
		runner = sizer;
		vegging (runner, t1);
	}
	function vegging (runner, t1) {
		var vegger = 0;
		var vsel = [];
		var vegar = document.getElementsByClassName("vegs");
		for (var i2 = 0; i2 < vegar.length; i2++) {
			if (vegar[i2].checked) {
				vsel.push(vegar[i2].value);
				t1 = t1+vegar[i2].value+"<br>";
			}
		}
		var voppet = vsel.length;
		if (voppet > 1) {
			vegger = voppet - 1
		}
		else {
			vegger = 0;
		}
		runner += vegger
		topping (runner, t1);
	}
	function topping (runner, t1) {
		var topper = 0;
		var tsel = [];
		var tar = document.getElementsByClassName("toppings");
		for (var i3 = 0; i3 < tar.length; i3++) {
			if (tar[i3].checked) {
				tsel.push(tar[i3].value);
				t1 = t1+tar[i3].value+"<br>";
			}
		}
		var toppet = tsel.length;
		if (toppet > 1) {
			topper = toppet - 1
		}
		else {
			topper = 0;
		}
		runner += topper
		document.getElementById("showT").innerHTML = t1;
		document.getElementById("price").innerHTML = "<h3>Total: <strong>$"+runner+".00 </strong></h3>";
	}
