console.log("script3")


var countries = ["Canada","Ethiopia","Kenya","Somolia"]
var year = [2015, 2015, 2015, 2015]
var mmratio = [7,353,510,732]

document.getElementById("clickMe")

document.getElementById("clickMe").onclick = clicked;

function clicked() {
	var value = document.getElementById("fname").value

	for (i = 0; i < countries.length; i = i + 1) {

		if (value === countries[i]) {
			console.log(value + " has a population of" + mmratio[i]);
			document.getElementById("results").innerHTML = value+" has a maternal mortality ratio of "+mmratio[i] +" in the year " + year[i];

		}

	}
	
	

}





