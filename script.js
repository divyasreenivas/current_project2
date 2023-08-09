let num1 =  2 
let num2 =  4

document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2
let sumtotal = document .getElementById("sum-el")

function add(){
    let total = num1+num2
    sumtotal.textContent =total

}
function substraction(){
    let total = num1 - num2
    sumtotal.textContent =total

}
function multiplication(){
    let total = num1*num2
    sumtotal.textContent =total
    
    

}
function division(){
    let total = num1/num2
    sumtotal.textContent =total

}

