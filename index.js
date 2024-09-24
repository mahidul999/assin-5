
// 1st Donate--------------------------------------------------------------------------
document.querySelector("#donate-Btn-1").addEventListener("click", function(event){
    event.preventDefault();
    const addMoney1 =  document.querySelector( "#add-money-1").value;
    let adMoney1 = parseFloat(addMoney1);  

const totalCash = document.querySelector("#total-cash").innerText;
let totalCash_1 = parseFloat(totalCash);

let currentTotal = totalCash - addMoney1;
document.querySelector("#total-cash").innerText = currentTotal;

const donatedTotal_1 = document.querySelector( "#donated-amount-1").innerText;

const total1 = parseFloat(donatedTotal_1) + parseFloat(addMoney1);

document.querySelector( "#donated-amount-1").innerText = total1;
}
) 


// 2st Donate--------------------------------------------------------------------------
document.querySelector("#donate-Btn-2").addEventListener("click", function(Event2){
    Event2.preventDefault();
    const addMoney2 =  document.querySelector( "#add-money-2").value;
    let adMoney2 = parseFloat(addMoney2);  

const totalCash = document.querySelector("#total-cash").innerText;
let totalCash_2 = parseFloat(totalCash);

let currentTotal = totalCash - addMoney2;
document.querySelector("#total-cash").innerText = currentTotal;

const donatedTotal_2 = document.querySelector( "#donated-amount-2").innerText;

const total2 = parseFloat(donatedTotal_2) + parseFloat(addMoney2);

document.querySelector( "#donated-amount-2").innerText = total2;
}
) 


// 3st Donate--------------------------------------------------------------------------
document.querySelector("#donate-Btn-3").addEventListener("click", function(event){
    event.preventDefault();
    const addMoney3 =  document.querySelector( "#add-money-3").value;
    let adMoney3 = parseFloat(addMoney3);  

const totalCash = document.querySelector("#total-cash").innerText;
let totalCash_3 = parseFloat(totalCash);

let currentTotal = totalCash - addMoney3;
document.querySelector("#total-cash").innerText = currentTotal;

const donatedTotal_3 = document.querySelector( "#donated-amount-3").innerText;

const total3 = parseFloat(donatedTotal_3) + parseFloat(addMoney3);

document.querySelector( "#donated-amount-3").innerText = total3;
}
) 


