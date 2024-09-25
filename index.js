
// 1st Donate--------------------------------------------------------------------------
document.querySelector("#donate-Btn-1").addEventListener("click", function(event){
    event.preventDefault();
    const addMoney1 =  document.querySelector( "#add-money-1").value;

    let adMoney1 = parseFloat(addMoney1);  
const totalCash = document.querySelector("#total-cash").innerText;
let totalCash_1 = parseFloat(totalCash);

if(adMoney1 >= 0){
let currentTotal = totalCash - addMoney1;
document.querySelector("#total-cash").innerText = currentTotal;

const donatedTotal_1 = document.querySelector( "#donated-amount-1").innerText;

const total1 = parseFloat(donatedTotal_1) + parseFloat(addMoney1);

document.querySelector( "#donated-amount-1").innerText = total1;

// // History---------------------------------------------------------- 
const A = document.createElement('p');
const date = new Date(2023, 8, 10, 23, 15, 34, 0);
A.classList.add('bg-black')
A.innerText = `Doneted ${addMoney1} BDT for Noyakhali, Current balance is ${currentTotal}
Current time is: ${date}`
document.querySelector('#money-history').appendChild(A);

}
else{ alert("Not Possible");
}

}
) 

// 2st Donate--------------------------------------------------------------------------
document.querySelector("#donate-Btn-2").addEventListener("click", function(Event2){
    Event2.preventDefault();
    const addMoney2 =  document.querySelector( "#add-money-2").value;
    let adMoney2 = parseFloat(addMoney2);  
    
const totalCash = document.querySelector("#total-cash").innerText;
let totalCash_2 = parseFloat(totalCash);

if(adMoney2 >= 0){
let currentTotal = totalCash - addMoney2;
document.querySelector("#total-cash").innerText = currentTotal;

const donatedTotal_2 = document.querySelector( "#donated-amount-2").innerText;

const total2 = parseFloat(donatedTotal_2) + parseFloat(addMoney2);

document.querySelector( "#donated-amount-2").innerText = total2;

// // History---------------------------------------------------------- 
const B = document.createElement('p');
const date = new Date(2023, 8, 10, 23, 15, 34, 0);
B.classList.add('bg-black')
B.innerText = `Doneted ${addMoney2} BDT for Feli, Current balance is ${currentTotal}
Current time is: ${date}`
document.querySelector('#money-history').appendChild(B);

}
else{ alert("Not Possible");
}


}
) 


// 3st Donate--------------------------------------------------------------------------
document.querySelector("#donate-Btn-3").addEventListener("click", function(event){
    event.preventDefault();
    const addMoney3 =  document.querySelector( "#add-money-3").value;
    let adMoney3 = parseFloat(addMoney3);  

const totalCash = document.querySelector("#total-cash").innerText;
let totalCash_3 = parseFloat(totalCash);

if(adMoney3 >= 0){
let currentTotal = totalCash - addMoney3;
document.querySelector("#total-cash").innerText = currentTotal;

const donatedTotal_3 = document.querySelector( "#donated-amount-3").innerText;

const total3 = parseFloat(donatedTotal_3) + parseFloat(addMoney3);

document.querySelector( "#donated-amount-3").innerText = total3;

// // History---------------------------------------------------------- 
const C = document.createElement('p');
const date = new Date(2023, 8, 10, 23, 15, 34, 0);
C.classList.add('bg-black')
C.innerText = `Doneted ${addMoney3} BDT for Protesters, Current balance is ${currentTotal}
Current time is: ${date}`
document.querySelector('#money-history').appendChild(C);

}
else{ alert("Not Possible");
}


}
) 

