function display(valueV) {
		document.getElementById("answer").value+=valueV
	}
	function compl() {
		let v1 = document.getElementById("answer").value
		let v2 = eval(v1)
		document.getElementById("answer").value = v2
	}
	function reset() {
		document.getElementById("answer").value = ""
	}
