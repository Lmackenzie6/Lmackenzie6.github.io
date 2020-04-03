
var countries = ["CANADA","ETHIOPIA","KENYA","SOUTH AFRICA"]
var year = [2018,2013,2016,2018 ]
var unrate = [4.98,1.68,1.56,23.46]
var age = ["25 years and older","25 years and older","25 years and older","25 years and older"]


document.getElementById("goal8button").onclick = clicked;

function clicked() {
	console.log("clicked")
    
    
    value = document.getElementById("fname").value.toUpperCase();
    console.log(value);
    
    for (i = 0; i < countries.length; i = i + 1) {
        
        if (countries[i] === value) {
            
            ptag = document.getElementById("results")
            
            
            ptag.innerHTML = value+" had an unemployement rate of "+unrate[i] + "%" + " in the year " + year[i] + "." +" "+"This statistic represents the age group of" +" " +age[i] +" " +"and accounts for both males and females. <br/> <br/> <br/> <br/> Statistics are from: https://unstats.un.org/sdgs/indicators/database/ " ;
            
            console.log("found it")
            return;
        }   
        
    }
    
    
   
   
        ptag = document.getElementById("results")
    
        ptag.innerHTML = document.getElementById("results").innerHTML = "There is no data for this country at the moment. Countries with data are: Canada, Ethiopia, Kenya, and South Africa";
    
        console.log("not there")
    

}
    