function messageTemplate(principal, rate, interest, finalYear) {
    return `If you deposit <span class="yellow">${principal}</span>,<br/>
    at an interest rate of <span class="yellow">${rate}%</span>.<br/>
    You will receive an amount of <span class="yellow">${interest}</span>,<br/>
    in the year <span class="yellow">${finalYear}</span>`
}
function compute() {
    //get values from user input
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
    //validate principal input
    if (principal <= 0){
        alert("Enter a positive number")
        document.getElementById("result").innerHTML = ""
        document.getElementById("principal").focus()
        return
    }
    //calculate interest with formula
    var interest = principal * years * rate / 100;
    //convert years
    var today = new Date;
    var curYear = today.getFullYear();
    var finalYear = curYear + years;
    //display message with amounts
    document.getElementById("result").innerHTML = messageTemplate(principal, rate, interest, finalYear);
}
function displayRate() {
    var rate = document.getElementById("rate").value;
    document.getElementById("rate display").innerHTML = rate;
}
