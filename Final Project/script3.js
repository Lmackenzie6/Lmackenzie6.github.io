console.log("script3")


    var countries = ["Canada","Ethiopia","Kenya","Somolia"]
    var year = [2015, 2015, 2015, 2015]
    var mmratio = [7,353,510,732]


    document.getElementById("goal3button").onclick = clicked;

    

    function clicked() {
        
        
        var value = document.getElementById("fname").value;
        
        
        
        for (i = 0; i < countries.length; i = i + 1) {

            if (value === countries[i]) {
                document.getElementById("results").innerHTML = value+" had a maternal mortality ratio of "+mmratio[i] + " deaths per 100,000 live births" + " in the year " + year[i] + ".";
                
            } else if (value !== countries[i]){
                    document.getElementById("results").innerHTML = "There is no data for this country at the moment. Countries with data are: Canada, Ethiopia, Kenya, and Somolia";
            }
           }
           
    }
        
    