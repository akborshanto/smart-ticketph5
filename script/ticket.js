///1............not Compolete Banner-button

/* function-select-ticket============================*/

let addSelect=document.getElementsByClassName('add-select')
/* count-plus-minus */
let countPlus=0;
let countMinus=40;
/* dynamic-price */
let price=0;
/* total-taka */
let perTicketTaka=0;;

for (let addSelects of addSelect ){ 
    
/* listener */
addSelects.addEventListener('click',function(e){
    /* select-bg */
    const addColor=addSelects.classList.add("bg-green-500")

/* count-minus and plus */

if( countMinus > 0){
    countMinus -= 1;
    const countMinusDisplay=document.getElementById('seat-count-minus').innerText=countMinus;
    
}
countPlus += 1;
const countPlusDisplay=document.getElementById('seat-plus-count').innerText=countPlus;
/* opt */
if (countPlus >40){
   countPlus += 1;
   alert("dklsajf")
    const countPlusDisplay=document.getElementById('seat-plus-count').innerText=countPlus;
}


/* dynamic-seat-count */
const addSelectss=addSelects.innerText;

/* ticket */
const ticket=document.createElement('h3')
ticket.innerHTML= addSelectss;
document.getElementById('seat-dynamic-price').appendChild(ticket)
/* economic */
const economic=document.createElement('h3')
economic.innerHTML= "Economic";
document.getElementById('seat-dynamic-price').appendChild(economic)
/* price 550 */
const seatPrice=document.createElement('h3')
seatPrice.innerHTML= 550;
document.getElementById('seat-dynamic-price').appendChild(seatPrice)

/* Price-calculate */



perTicketTaka += 550;
     /* total-taka */
const totalTakaDisplay=document.getElementById('total-taka').innerText=perTicketTaka;
const grandTotalDisplay=document.getElementById('grand-taka').innerText=perTicketTaka;


     /* grans-taka */




 
})



}






