

function compute()
{
    principal = document.getElementById("principal").value;

    //Validate that the amount is a positive number
    if(!validateAmount(principal)) {
        document.getElementById("principal").focus();
        return;
    }

    //Get the values to compute interest
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * years * rate / 100;

    //Compute interest
    futureYear = add_years(new Date(), parseInt(years)).getFullYear();
    var result = document.getElementById("result");

    //Set the result
    result.innerHTML = 'if you deposit <mark>' + principal + '</mark>,<br/> at an interest rate of <mark>' + rate + '%</mark>.<br/> You will receive an amount of <mark>' + interest + '</mark>,<br/>in the year <mark>' + futureYear + '</mark>';
    document.getElementById("principal").focus();
    
}


//Function to validate amount
function validateAmount(amount){
    if(amount === '') {
        showPrincipalValidationMessage();
        return false;
    }
    principalNumber = parseFloat(amount);
    if(principalNumber < 1){
        showPrincipalValidationMessage();
        return false;
    }

    return true;
}

function showPrincipalValidationMessage(){
    alert('Enter a positive number');
    result.innerHTML = '';
}


//This funtion respons to the ranhe onchnage event
function rangeChanged(value){
    var spanRate = document.getElementById("span-rate");
    spanRate.innerHTML = value + '%' ;
}


//function that add years to a date
function add_years(dt,n) 
 {
    return new Date(dt.setFullYear(dt.getFullYear() + n));      
 }
        