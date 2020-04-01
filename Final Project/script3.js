
var countries = ["CANADA","ETHIOPIA","KENYA","SOMOLIA"]
var year = [2015, 2015, 2015, 2015]
var mmratio = [7,353,510,732]


document.getElementById("goal3button").onclick = clicked;

function clicked() {
	console.log("clicked")
    
    loc = -1;
    
    value = document.getElementById("fname").value.toUpperCase();
    console.log(value);
    
    for (i = 0; i < countries.length; i = i + 1) {
        
        if (countries[i] === value) {
            
            ptag = document.getElementById("results")
            
            
            ptag.innerHTML = value+" had a maternal mortality ratio of "+mmratio[i] + " deaths per 100,000 live births" + " in the year " + year[i] + ".";
            
            console.log("found it")
            return;
        }   
        
    }
    
    
   
   
        ptag = document.getElementById("results")
    
        ptag.innerHTML = document.getElementById("results").innerHTML = "There is no data for this country at the moment. Countries with data are: Canada, Ethiopia, Kenya, and Somolia";
    
        console.log("not there")
    

}
    