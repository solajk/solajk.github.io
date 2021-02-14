function messageTemplate(principal, rate, year, finalYear) {
    return `xxx 
    <span class="yellow">${principal}hi</span>`
}


function compute() {
    //get values from user input
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //calculate interest with formula
    var interest = principal * years * rate / 100;
    //convert years
    var today = new Date;
    var curYear = today.getFullYear();
    var finalYear = curYear + years;
    //display message with amounts
    var message = 'If you deposit ' + principal + ",";
    console.log(interest)
    document.getElementById("result").innerHTML = messageTemplate(principal, rate, curYear, finalYear);


}
function displayRate() {
    var rate = document.getElementById("rate").value;
    document.getElementById("rate display").innerHTML = rate;
}
