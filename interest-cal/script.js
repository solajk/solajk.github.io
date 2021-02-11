function compute() {
    //get values from user input
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //calculate interest with formula
    var interest = principal * years * rate / 100;
    //display message with amounts
    
    
};

function convertYears(){
    //get today's date with year
    var curYear = new Date.getFullYear();
    var years = document.getElementById("years").value;
    //add number of years from user input
    var finalYear = curYear + years;
    return finalYear;
};

function displayRate(){
    var rate = document.getElementById("rate").value;
    document.getElementById("rate display").innerHTML = rate;
};


