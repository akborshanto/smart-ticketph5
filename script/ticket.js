
/* =========================== */


/* button-seat */
const allBtn = document.getElementsByClassName("add-select");
let totalPrice=0;

for( const btn of allBtn){



  btn.addEventListener('click',function(e){
    e.target.setAttribute("disabled", true);
    const addColor = btn.classList.add("bg-green-500");






/* jotil */
/* increamint */

const currentCount=document.getElementById('seat-plus-count').innerText;

const parseNum=parseInt(currentCount)
const newNum=parseNum + 1;
/* decrement */
const decCount=document.getElementById('seat-count-minus').innerText;
const parseDec=parseInt(decCount);
let newDec=newNum - 1;

//console.log(newDec)
/* increamnet */
if (newNum > 4  ) {

  const removeColor = btn.classList.remove("bg-green-500");
  document.getElementById("addSelect").setAttribute("disabled", true);
 
}

setInnerText('seat-count-minus',newDec)

setInnerText('seat-plus-count',newNum)





//console.log(btn.innerText)

    /* ticket ============*/
    const btns = btn.innerText;
    appendChilds('seat-dynamic-price',btns)
    appendChilds( 'seat-dynamic-price', "Economic")
    appendChilds( 'seat-dynamic-price',550)


/* total-price */
let  price=550;

totalPrice = totalPrice + price; 
/* DISPLAY-TOTAL-PRICE */
setInnerText('total-taka',totalPrice)

/* DISPLAY_GRAND_PRICE */
setInnerText('grand-taka',totalPrice)


  })


}


/* coupon */
const couponButton = document.getElementById("coupon-button");

couponButton.addEventListener("click", function () {
//  let couponInput = document.getElementById("coupon-input").value.toUpperCase();
let couponInput = document.getElementById("coupon-input").value;
  if (couponInput === "NEW15" ) {
/* coupon */
const discount= totalPrice * 15 / 100;
const totalGrand= totalPrice - discount;

//setInnerText('seat-dynamic-prices',discount)
setInnerText('grand-taka',totalGrand)


    document.getElementById("coupon-input").classList.add("hidden");
    couponButton.classList.add("hidden");

  }else if(couponInput === "Couple 20"){


    const discount= totalPrice * 20 / 100;
    const totalGrand= totalPrice - discount;

   // setInnerText('seat-dynamic-prices',discount)
    setInnerText('grand-taka',totalGrand)

  
    setInnerText('seat-dynamic-prices',totalGrand)
    document.getElementById("coupon-input").classList.add("hidden");
    couponButton.classList.add("hidden");


  }
  
  else {
    alert("invalid coupon");
    document.getElementById("coupon-input").value = "";
  }
});



/* set-inner-text */
function setInnerText(id,value){


  document.getElementById(id).innerText= value;
}
/* append-childs */
function appendChilds(id,value){

  const economic = document.createElement("h3");
  economic.innerHTML = value;
  document.getElementById(id).appendChild(economic);

}
