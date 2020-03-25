flag=true;
console.log("script3")


    var countries = ["Canada","Ethiopia","Kenya","Somolia"]
    var year = [2015, 2015, 2015, 2015]
    var mmratio = [7,353,510,732]

    document.getElementById("goal3button")

    document.getElementById("goal3button").onclick = clicked;

    

    function clicked() {
        var value = document.getElementById("fname").value;
        
        
        
        for (i = 0; i < countries.length; i = i + 1) {

            if (value === countries[i]) {
                console.log(value + " has a population of" + mmratio[i]);
                document.getElementById("results").innerHTML = value+" has a maternal mortality ratio of "+mmratio[i] + " per 100,000 live births" + " in the year " + year[i] + ".";
            }
               
            if (value !== countries[i]);
                flag = false;
                document.getElementById("results").innerHTML = "There is no data for this country at the moment. Countries with data are: Canada, Ethiopia, Kenya, and Somolia";
            
                flag = true;
            
           
            
            
     /*   else {
             document.getElementById("results").innerHTML = "Data for this country is not available yet. Countries with data are : Canada, Ethiopia, Kenya, and Somalia. Please try inputting one of these countries to view data. Inputs are case sensitive." ;
                
            
            }
            */

            }

        }



    





